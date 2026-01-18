# Theoremica - Visual Proof Builder with Python Backend

A visual proof builder using Blockly that converts block-based proofs to Lean 4 code via a Python backend.

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

Or install individually:

```bash
pip install flask flask-cors
```

### 2. Start the Python Backend

```bash
python server.py
```

You should see:

```
🚀 Starting Theoremica Python Backend
📝 Server running at http://localhost:5000
💡 Use /convert_to_lean endpoint to convert proofs to Lean 4
```

### 3. Open the HTML File

Open `index.html` in your browser. You should see a green "Backend connected" indicator.

## How It Works

1. **Build Your Proof**: Drag blocks from the categories:
   - Basic Proof (Assume, Therefore, QED)
   - Logical Symbols (∀, ∃, →, ↔, ¬, ∧, ∨, =, ≠)
   - Set & Relation (∈, ⊆, ∪, ∩, etc.)
   - Arithmetic (+, -, \*, /, ^, ≤, <, etc.)
   - Proof Tactics (Assume, Let, Use, Split, Apply, etc.)

2. **Click "Check Solution"**:
   - Extracts your block structure
   - Converts to natural language
   - Sends to Python backend at `http://localhost:5000/convert_to_lean`
   - Displays generated Lean 4 code

## Customizing the Backend

### Add LLM Integration

Edit `server.py` and uncomment one of these functions:

#### Option 1: OpenAI (GPT-4)

```python
def generate_lean_with_openai(proof_text):
    from openai import OpenAI

    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an expert in Lean 4 theorem proving."},
            {"role": "user", "content": f"Convert to Lean 4:\n\n{proof_text}"}
        ]
    )

    return response.choices[0].message.content
```

Then update the endpoint:

```python
lean_code = generate_lean_with_openai(natural_language)
```

Set your API key:

```bash
export OPENAI_API_KEY='your-key-here'
```

#### Option 2: Anthropic (Claude)

```python
def generate_lean_with_anthropic(proof_text):
    import anthropic

    client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=2000,
        messages=[
            {"role": "user", "content": f"Convert to Lean 4:\n\n{proof_text}"}
        ]
    )

    return message.content[0].text
```

Set your API key:

```bash
export ANTHROPIC_API_KEY='your-key-here'
```

### Add Custom Processing

You can add any Python processing in `server.py`:

```python
@app.route('/convert_to_lean', methods=['POST'])
def convert_to_lean():
    data = request.get_json()
    natural_language = data.get('proof_text', '')

    # Your custom processing here
    lean_code = your_custom_function(natural_language)

    return jsonify({
        'success': True,
        'lean_code': lean_code
    })
```

## API Endpoints

- **POST** `/convert_to_lean` - Convert proof to Lean 4
  - Request: `{ "proof_text": "..." }`
  - Response: `{ "success": true, "lean_code": "..." }`

- **GET** `/health` - Check server status
  - Response: `{ "status": "ok", "message": "..." }`

## Troubleshooting

**Backend disconnected?**

- Make sure `server.py` is running
- Check that port 5000 is not in use
- Look for errors in the Python console

**CORS errors?**

- The backend uses `flask-cors` to allow cross-origin requests
- If issues persist, check browser console for details

**No Lean code generated?**

- Currently returns a placeholder
- Implement `generate_lean_with_openai()` or `generate_lean_with_anthropic()`
- Or write your own conversion logic

## Project Structure

```
theoremicawithblockly1/
├── index.html          # Frontend (Blockly + UI)
├── server.py          # Python Flask backend
├── requirements.txt   # Python dependencies
└── README.md         # This file
```
