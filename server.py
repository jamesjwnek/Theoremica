from flask import Flask, request, jsonify, send_from_directory, redirect
import os
import time
import uuid
import threading
from concurrent.futures import ThreadPoolExecutor
from dotenv import load_dotenv
from gumloop import GumloopClient
from requests.exceptions import HTTPError
import subprocess
import tempfile

load_dotenv()

app = Flask(__name__)

# Async job infrastructure
executor = ThreadPoolExecutor(max_workers=2)
jobs = {}
jobs_lock = threading.Lock()
last_result = None  # optional simple cache

# Enable CORS
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

# Serve static frontend from the project directory for same-origin requests
@app.route('/')
def index():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    return send_from_directory(project_dir, 'index.html')

@app.route('/problem1')
def problem1():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    return send_from_directory(project_dir, 'problem1.html')

@app.route('/problem2')
def problem2():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    return send_from_directory(project_dir, 'problem2.html')

@app.route('/<path:path>')
def serve_file(path):
    project_dir = os.path.dirname(os.path.abspath(__file__))
    return send_from_directory(project_dir, path)


def _validate_proof(natural_language: str) -> tuple:
    """
    Mini compiler: validates proof structure before Gumloop processing.
    Returns (is_valid, error_message)
    """
    if not natural_language or not natural_language.strip():
        return False, "Proof text is empty."
    
    lines = [l.strip() for l in natural_language.split('\n') if l.strip()]
    
    # Check for basic structure: should have some proof steps
    if len(lines) < 1:
        return False, "Proof has no steps."
    
    # Check for required blocks: Assume/Suppose, Therefore, QED
    has_assume = any('assume' in l.lower() or 'suppose' in l.lower() for l in lines)
    has_therefore = any('therefore' in l.lower() or 'then' in l.lower() for l in lines)
    has_qed = any('qed' in l.lower() for l in lines)
    
    if not has_assume:
        return False, "Missing 'Assume' or 'Suppose' block for hypotheses."
    if not has_therefore:
        return False, "Missing 'Therefore' block for proof steps."
    if not has_qed:
        return False, "Missing 'QED' block to conclude the proof."
    
    # Check for obvious syntax issues
    for line in lines:
        # Warn about unmatched parentheses
        open_parens = line.count('(')
        close_parens = line.count(')')
        if open_parens != close_parens:
            return False, f"Unmatched parentheses in: {line[:50]}..."
        
    return True, None


def _run_conversion(natural_language: str):
    """Run Gumloop conversion and Lean verification, returns (lean_code, is_valid)"""
    # Validate proof structure first
    is_valid_proof, error_msg = _validate_proof(natural_language)
    if not is_valid_proof:
        raise RuntimeError(f"Proof validation failed: {error_msg}")
    
    api_key = os.getenv('GUMLOOP_API_KEY')
    user_id = os.getenv('GUMLOOP_USER_ID')
    flow_id = os.getenv('GUMLOOP_FLOW_ID')

    if not api_key or not user_id or not flow_id:
        raise RuntimeError('Gumloop not configured. Check API key, user id, and flow id env vars.')

    client = GumloopClient(api_key=api_key, user_id=user_id)

    output = client.run_flow(flow_id=flow_id, inputs={'input': natural_language})
    lean_code = output.get('output')
    lean_code = _clean_lean_code(lean_code)

    # Verify Lean code
    is_valid = _verify_lean_code(lean_code)
    return lean_code, is_valid


def _process_job(job_id: str, natural_language: str):
    """Background job processor: updates jobs dict with status and result"""
    with jobs_lock:
        jobs[job_id]['status'] = 'running'
        jobs[job_id]['started_at'] = time.time()

    try:
        lean_code, is_valid = _run_conversion(natural_language)
        result = {
            'lean_code': lean_code,
            'valid': is_valid,
        }
        with jobs_lock:
            jobs[job_id]['status'] = 'completed'
            jobs[job_id]['completed_at'] = time.time()
            jobs[job_id]['result'] = result
        
    except Exception as e:
        with jobs_lock:
            jobs[job_id]['status'] = 'failed'
            jobs[job_id]['error'] = str(e)
            jobs[job_id]['completed_at'] = time.time()
        


@app.route('/jobs', methods=['POST', 'OPTIONS'])
def create_job():
    """Create a conversion job and return a job_id immediately"""
    if request.method == 'OPTIONS':
        return '', 204

    data = request.get_json(silent=True) or {}
    natural_language = data.get('proof_text', '')
    if not natural_language:
        return jsonify({'error': 'No proof text provided'}), 400

    job_id = uuid.uuid4().hex
    with jobs_lock:
        jobs[job_id] = {
            'id': job_id,
            'status': 'queued',
            'created_at': time.time(),
        }

    # Submit background job
    executor.submit(_process_job, job_id, natural_language)

    return jsonify({'job_id': job_id}), 202


@app.route('/jobs/<job_id>', methods=['GET'])
def get_job(job_id: str):
    """Fetch job status and result"""
    with jobs_lock:
        job = jobs.get(job_id)
        if not job:
            return jsonify({'error': 'job not found'}), 404
        return jsonify(job), 200




def _clean_lean_code(lean_code):
    """Clean up Lean code formatting"""
    if not lean_code:
        return lean_code
    
    # Strip whitespace first
    lean_code = lean_code.strip()
    
    # Replace escape sequences with actual characters FIRST
    lean_code = lean_code.replace('\\n', '\n')
    lean_code = lean_code.replace('\\t', '\t')
    lean_code = lean_code.replace('\\"', '"')
    lean_code = lean_code.replace("\\'", "'")
    
    # Remove markdown code block markers (``` or ```)
    if lean_code.startswith('```'):
        lean_code = lean_code[3:]
    if lean_code.endswith('```'):
        lean_code = lean_code[:-3]
    
    # Split into lines
    lines = lean_code.split('\n')
    
    # Remove "lean" from the first line if it's there (language identifier)
    if lines and lines[0].strip().lower() == 'lean':
        lines = lines[1:]
    elif lines and 'lean' in lines[0].lower():
        # If "lean" is part of the first line, try to remove it
        lines[0] = lines[0].replace('lean', '', 1).lstrip()
    
    # Remove any remaining backticks from start/end of lines
    lines = [line.lstrip('`').rstrip('`') for line in lines]
    
    # Rejoin and strip again
    lean_code = '\n'.join(lines).strip()
    
    return lean_code


def _verify_lean_code(lean_code):
    
    #return True
    
    """Verify Lean code and return True if return code is 0, False otherwise """
    
    if not lean_code:
        return False
    
    # Ensure code ends with a newline
    if not lean_code.endswith('\n'):
        lean_code = lean_code + '\n'
    
    # Get the project directory
    project_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Create a temporary file with the Lean code
    with tempfile.NamedTemporaryFile(mode='w', suffix='.lean', delete=False, dir=project_dir) as f:
        f.write(lean_code)
        temp_file = f.name
    
    try:
        print(f"DEBUG: Starting Lean verification with temp file: {temp_file}")
        result = subprocess.run(
            ['lake', 'env', 'lean', temp_file],
            capture_output=True,
            text=True,
            timeout=30,
            cwd=project_dir
            )
        
        print(f"Lean returncode: {result.returncode}")
        print(f"Lean stdout: {result.stdout}")
        print(f"Lean stderr: {result.stderr}")
        
        # Return True if return code is 0, False otherwise
        return result.returncode == 0
    
    except Exception as e:
        print(f"Verification error: {str(e)}")
        return False
    finally:
        # Clean up temp file
        try:
            os.unlink(temp_file)
        except:
            pass


@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'message': 'Server is running'})


# Latest result endpoint removed; rely on job polling


if __name__ == '__main__':
    print("🚀 Starting Theoremica Backend")
    print("   Server: http://localhost:8080")
    # Simplest runner; no reloader to avoid duplicate processes
    app.run(debug=False, port=8080, threaded=True, use_reloader=False)
