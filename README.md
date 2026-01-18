# Theoremica 🎓

**A visual proof-building platform that makes mathematical theorem proving intuitive and accessible.**

Theoremica combines the power of [Google Blockly](https://developers.google.com/blockly) with [Lean 4](https://lean-lang.org/) theorem proving to create an interactive learning environment where students and mathematicians can construct formal proofs using drag-and-drop blocks. The system converts visual block-based proofs into natural language, then leverages AI to generate verified Lean 4 code.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🧩 Visual Proof Builder

- **130+ Mathematical Blocks**: Comprehensive library covering logic, set theory, arithmetic, and proof tactics
- **Dual Block System**: Each block comes in both simple (with text inputs) and container (nested structure) versions
- **Interactive Toolbox**: Organized categories for easy discovery and learning
- **Real-time Validation**: Immediate feedback on proof structure

### 📚 Educational Content

- **MATH 240 Course**: 12 carefully curated theorems with guided proofs
- **Random Problem Generator**: 50 discrete mathematics challenges
- **Step-by-Step Learning**: Progressive difficulty with detailed explanations

### 🤖 AI-Powered Conversion

- **Natural Language Processing**: Converts block structures to human-readable proof text
- **Gumloop Integration**: Automated AI pipeline for Lean 4 code generation
- **Async Job System**: Non-blocking proof verification with status tracking
- **Lean 4 Verification**: Direct integration with Lean theorem prover

### 🎨 Modern Interface

- Clean, responsive design
- Syntax-highlighted code display
- Proof step visualization
- Mobile-friendly layout

---

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Modern web browser (Chrome, Firefox, Safari, Edge)
- [Lean 4](https://lean-lang.org/lean4/doc/setup.html) (optional, for local verification)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/theoremica.git
cd theoremica
```

2. **Install Python dependencies**

```bash
pip install -r requirements.txt
```

3. **Set up environment variables**

```bash
cp .env.example .env
# Edit .env and add your Gumloop API key
```

4. **Start the server**

```bash
python3 server.py
```

5. **Open in browser**
   Navigate to `http://localhost:8080`

---

## 📖 Usage Guide

### Building Your First Proof

1. **Choose a Problem**
   - Start with MATH 240 course for guided learning
   - Or try a Random Problem for a challenge

2. **Drag Blocks from Toolbox**
   - **Basic Proof**: Assume, Therefore, QED, Custom Text
   - **Logical Symbols**: ∀, ∃, →, ↔, ¬, ∧, ∨, =, ≠, ⊤, ⊥
   - **Set Theory**: ∈, ⊆, ∪, ∩, ×, 𝒫, |·|, ∘, R
   - **Arithmetic**: +, −, ×, ÷, ^, ∣, ≡, gcd, lcm, !, ⌊·⌋, ⌈·⌉, |·|, Σ, ∏
   - **Proof Tactics**: assume, suppose, case, let, use, split, left, right, simp, rfl, contradiction, apply

3. **Connect Blocks**
   - Stack blocks vertically to build proof steps
   - Use container blocks for nested structures
   - Add custom text for annotations

4. **Generate Lean Code**
   - Click "Check Solution" to convert proof
   - View natural language translation
   - See generated Lean 4 code
   - Check verification status

### Example: Proving Commutativity

```
Assume: a and b are integers
Custom: We want to show a + b = b + a
Therefore: By commutativity of addition
QED
```

This generates Lean 4 code that can be verified by the theorem prover.

---

## Architecture

### Project Structure

```
theoremica/
├── index.html           # Landing page & navigation
├── math240.html         # MATH 240 course interface
├── problem1.html        # Visual proof builder (main app)
├── blocks.js            # Blockly block definitions (1600+ lines)
├── server.py            # Flask backend with Gumloop integration
├── requirements.txt     # Python dependencies
├── .env                 # Environment configuration
├── Theoremica.lean      # Lean 4 project file
├── lakefile.lean        # Lean build configuration
└── README.md            # This file
```

### Technology Stack

**Frontend:**

- HTML5/CSS3/JavaScript
- [Google Blockly](https://developers.google.com/blockly) - Visual programming blocks
- Responsive design with modern CSS

**Backend:**

- [Flask](https://flask.palletsprojects.com/) - Python web framework
- [Flask-CORS](https://flask-cors.readthedocs.io/) - Cross-origin resource sharing
- [Gumloop](https://www.gumloop.com/) - AI workflow automation
- Async job processing with ThreadPoolExecutor

**Theorem Proving:**

- [Lean 4](https://lean-lang.org/) - Formal verification system
- [Lake](https://github.com/leanprover/lake) - Lean build tool
- Direct subprocess integration for verification

### Data Flow

```
User Blocks → extractProofSteps() → Natural Language
                                           ↓
                                    POST /jobs
                                           ↓
                                    Gumloop AI Pipeline
                                           ↓
                                    Lean 4 Code Generation
                                           ↓
                                    GET /jobs/:id (polling)
                                           ↓
                                    Display Result + Verification Status
```

---

## Configuration

### Environment Variables

Create a `.env` file with:

```bash
# Gumloop Configuration
GUMLOOP_API_KEY=your_gumloop_api_key_here
GUMLOOP_PIPELINE_ID=your_pipeline_id_here

# Server Configuration (optional)
PORT=8080
DEBUG=False
```

### Customizing Block Definitions

Edit `blocks.js` to add new mathematical blocks:

```javascript
Blockly.Blocks["your_block"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Your Symbol")
      .appendField(new Blockly.FieldTextInput("default"), "FIELD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Your block description");
  },
};
```

Then add extraction and translation logic in `problem1.html`:

1. Add to `extractProofSteps()` function
2. Add to `convertToNaturalLanguage()` function
3. Add to toolbox JSON

---

## 🧪 API Reference

### POST `/jobs`

Create a new proof verification job.

**Request:**

```json
{
  "proof_text": "Natural language proof description"
}
```

**Response:**

```json
{
  "job_id": "uuid-string",
  "status": "pending"
}
```

### GET `/jobs/:id`

Check job status and retrieve results.

**Response:**

```json
{
  "status": "completed|pending|failed",
  "lean_code": "Generated Lean 4 code",
  "error": "Error message (if failed)"
}
```

### GET `/health`

Server health check.

**Response:**

```json
{
  "status": "ok",
  "message": "Server is running"
}
```

---

## Roadmap

- [ ] **Save/Load Proofs**: Local storage and export functionality
- [ ] **Proof Library**: Community-contributed proof repository
- [ ] **Multi-language Support**: Internationalization for education
- [ ] **Collaborative Mode**: Real-time proof building with others
- [ ] **Advanced Tactics**: Extended Lean 4 tactic library
- [ ] **Proof Hints**: AI-powered suggestions for next steps
- [ ] **Mobile App**: Native iOS/Android applications
- [ ] **LaTeX Export**: Convert proofs to publication-ready format

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Google Blockly Team** - For the amazing visual programming framework
- **Lean Community** - For the powerful theorem proving system
- **Gumloop** - For AI workflow automation

---

## Contact

For questions, suggestions, or collaboration opportunities, please open an issue on GitHub.

---

## Educational Use

Theoremica is designed for educational purposes and is ideal for:

- **Discrete Mathematics Courses**
- **Logic and Proof Theory Classes**
- **Self-Study and Independent Learning**
- **Research in Formal Methods Education**

Feel free to use, adapt, and extend this project for your educational needs!

---

**Built with ❤️ for mathematics education and formal verification**
