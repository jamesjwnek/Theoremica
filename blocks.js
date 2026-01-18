/**
 * Custom Blockly Block Definitions for Theoremica
 * This file contains all custom block definitions for the visual proof builder
 */

// ============================================================================
// BASIC PROOF BLOCKS
// ============================================================================

/**
 * Define the "Assume" block
 */
Blockly.Blocks["proof_assume"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Assume:")
      .appendField(new Blockly.FieldTextInput("statement"), "STATEMENT");
    this.setPreviousStatement(true, null); // Can connect to block above
    this.setNextStatement(true, null); // Can connect to block below
    this.setColour(230); // Blue color
    this.setTooltip("State an assumption");
    this.setHelpUrl("");
  },
};

/**
 * Define the "Therefore" block
 */
Blockly.Blocks["proof_therefore"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Therefore:")
      .appendField(new Blockly.FieldTextInput("conclusion"), "CONCLUSION");
    this.setPreviousStatement(true, null); // Can connect to block above
    this.setNextStatement(true, null); // Can connect to block below
    this.setColour(120); // Green color
    this.setTooltip("State a logical conclusion");
    this.setHelpUrl("");
  },
};

/**
 * Define the "QED" block
 */
Blockly.Blocks["proof_qed"] = {
  init: function () {
    this.appendDummyInput().appendField("QED ■");
    this.setPreviousStatement(true, null); // Can connect to block above
    // No setNextStatement - this is the end of the proof!
    this.setColour(0); // Red color
    this.setTooltip("End of proof");
    this.setHelpUrl("");
  },
};

// ============================================================================
// LOGICAL SYMBOLS BLOCKS
// ============================================================================

/**
 * Universal Quantifier (∀)
 */
Blockly.Blocks["logic_forall"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∀")
      .appendField(new Blockly.FieldTextInput("x"), "VAR")
      .appendField(", ")
      .appendField(new Blockly.FieldTextInput("P(x)"), "EXPR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Universal quantifier: ∀ x, P(x)");
  },
};

/**
 * Existential Quantifier (∃)
 */
Blockly.Blocks["logic_exists"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∃")
      .appendField(new Blockly.FieldTextInput("x"), "VAR")
      .appendField(", ")
      .appendField(new Blockly.FieldTextInput("P(x)"), "EXPR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Existential quantifier: ∃ x, P(x)");
  },
};

/**
 * Implication (→)
 */
Blockly.Blocks["logic_implies"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("P"), "LEFT")
      .appendField("→")
      .appendField(new Blockly.FieldTextInput("Q"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Implication: P → Q");
  },
};

/**
 * Biconditional (↔)
 */
Blockly.Blocks["logic_iff"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("P"), "LEFT")
      .appendField("↔")
      .appendField(new Blockly.FieldTextInput("Q"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Biconditional: P ↔ Q");
  },
};

/**
 * Negation (¬)
 */
Blockly.Blocks["logic_not"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("¬")
      .appendField(new Blockly.FieldTextInput("P"), "EXPR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Negation: ¬P");
  },
};

/**
 * Conjunction (∧)
 */
Blockly.Blocks["logic_and"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("P"), "LEFT")
      .appendField("∧")
      .appendField(new Blockly.FieldTextInput("Q"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Conjunction: P ∧ Q");
  },
};

/**
 * Disjunction (∨)
 */
Blockly.Blocks["logic_or"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("P"), "LEFT")
      .appendField("∨")
      .appendField(new Blockly.FieldTextInput("Q"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Disjunction: P ∨ Q");
  },
};

/**
 * Equality (=)
 */
Blockly.Blocks["logic_eq"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("=")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Equality: a = b");
  },
};

/**
 * Inequality (≠)
 */
Blockly.Blocks["logic_neq"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("≠")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Inequality: a ≠ b");
  },
};

// ============================================================================
// SET & RELATION SYMBOLS BLOCKS
// ============================================================================

/**
 * Set Membership (∈)
 */
Blockly.Blocks["set_elem"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("x"), "ELEM")
      .appendField("∈")
      .appendField(new Blockly.FieldTextInput("S"), "SET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set membership: x ∈ S");
  },
};

/**
 * Set Non-membership (∉)
 */
Blockly.Blocks["set_not_elem"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("x"), "ELEM")
      .appendField("∉")
      .appendField(new Blockly.FieldTextInput("S"), "SET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set non-membership: x ∉ S");
  },
};

/**
 * Subset (⊆)
 */
Blockly.Blocks["set_subset"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("A"), "LEFT")
      .appendField("⊆")
      .appendField(new Blockly.FieldTextInput("B"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Subset: A ⊆ B");
  },
};

/**
 * Proper Subset (⊂)
 */
Blockly.Blocks["set_proper_subset"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("A"), "LEFT")
      .appendField("⊂")
      .appendField(new Blockly.FieldTextInput("B"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Proper subset: A ⊂ B");
  },
};

/**
 * Union (∪)
 */
Blockly.Blocks["set_union"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("A"), "LEFT")
      .appendField("∪")
      .appendField(new Blockly.FieldTextInput("B"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Union: A ∪ B");
  },
};

/**
 * Intersection (∩)
 */
Blockly.Blocks["set_intersection"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("A"), "LEFT")
      .appendField("∩")
      .appendField(new Blockly.FieldTextInput("B"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Intersection: A ∩ B");
  },
};

/**
 * Set Difference (\)
 */
Blockly.Blocks["set_difference"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("A"), "LEFT")
      .appendField("\\")
      .appendField(new Blockly.FieldTextInput("B"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set difference: A \\ B");
  },
};

/**
 * Empty Set (∅)
 */
Blockly.Blocks["set_empty"] = {
  init: function () {
    this.appendDummyInput().appendField("∅");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Empty set: ∅");
  },
};

/**
 * Natural Numbers (ℕ)
 */
Blockly.Blocks["set_naturals"] = {
  init: function () {
    this.appendDummyInput().appendField("ℕ (Nat)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Natural numbers: ℕ");
  },
};

/**
 * Integers (ℤ)
 */
Blockly.Blocks["set_integers"] = {
  init: function () {
    this.appendDummyInput().appendField("ℤ (Int)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Integers: ℤ");
  },
};

/**
 * Rationals (ℚ)
 */
Blockly.Blocks["set_rationals"] = {
  init: function () {
    this.appendDummyInput().appendField("ℚ (Rat)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Rational numbers: ℚ");
  },
};

/**
 * Real Numbers (ℝ)
 */
Blockly.Blocks["set_reals"] = {
  init: function () {
    this.appendDummyInput().appendField("ℝ (Real)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Real numbers: ℝ");
  },
};

/**
 * Function Application f(x)
 */
Blockly.Blocks["set_function"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("f"), "FUNC")
      .appendField("(")
      .appendField(new Blockly.FieldTextInput("x"), "ARG")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Function application: f(x)");
  },
};

// ============================================================================
// ARITHMETIC & NUMBER THEORY SYMBOLS BLOCKS
// ============================================================================

/**
 * Addition (+)
 */
Blockly.Blocks["arith_add"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("+")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Addition: a + b");
  },
};

/**
 * Subtraction (-)
 */
Blockly.Blocks["arith_sub"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("-")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Subtraction: a - b");
  },
};

/**
 * Multiplication (*)
 */
Blockly.Blocks["arith_mul"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("*")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Multiplication: a * b");
  },
};

/**
 * Division (/)
 */
Blockly.Blocks["arith_div"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("/")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Division: a / b");
  },
};

/**
 * Exponentiation (^)
 */
Blockly.Blocks["arith_pow"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "BASE")
      .appendField("^")
      .appendField(new Blockly.FieldTextInput("n"), "EXP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Exponentiation: a ^ n");
  },
};

/**
 * Divides (∣)
 */
Blockly.Blocks["arith_divides"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("∣")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Divides: a ∣ b");
  },
};

/**
 * Modular Congruence (≡)
 */
Blockly.Blocks["arith_mod"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("≡")
      .appendField(new Blockly.FieldTextInput("b"), "MIDDLE")
      .appendField("[MOD")
      .appendField(new Blockly.FieldTextInput("n"), "MODULUS")
      .appendField("]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Modular congruence: a ≡ b [MOD n]");
  },
};

/**
 * Less than or equal (≤)
 */
Blockly.Blocks["arith_le"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("≤")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Less than or equal: a ≤ b");
  },
};

/**
 * Less than (<)
 */
Blockly.Blocks["arith_lt"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("<")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Less than: a < b");
  },
};

/**
 * Greater than or equal (≥)
 */
Blockly.Blocks["arith_ge"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField("≥")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Greater than or equal: a ≥ b");
  },
};

/**
 * Greater than (>)
 */
Blockly.Blocks["arith_gt"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField(">")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Greater than: a > b");
  },
};

// ============================================================================
// PROOF STRUCTURING & TACTICS BLOCKS
// ============================================================================

/**
 * Assume block (for intro tactic)
 */
Blockly.Blocks["tactic_assume"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Assume")
      .appendField(new Blockly.FieldTextInput("h"), "VAR")
      .appendField(":")
      .appendField(new Blockly.FieldTextInput("P"), "PROP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Assume a hypothesis (intro tactic)");
  },
};

/**
 * Suppose block (for negation proofs)
 */
Blockly.Blocks["tactic_suppose"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Suppose")
      .appendField(new Blockly.FieldTextInput("h"), "VAR")
      .appendField(":")
      .appendField(new Blockly.FieldTextInput("¬P"), "PROP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Suppose a negation hypothesis (intro h)");
  },
};

/**
 * Case analysis block
 */
Blockly.Blocks["tactic_case"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Case:")
      .appendField(
        new Blockly.FieldDropdown([
          ["zero", "zero"],
          ["step", "step"],
          ["left", "left"],
          ["right", "right"],
          ["other", "other"],
        ]),
        "CASE",
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Case analysis (case zero/step/left/right)");
  },
};

/**
 * Then block (chaining reasoning)
 */
Blockly.Blocks["tactic_then"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Then:")
      .appendField(new Blockly.FieldTextInput("next step"), "STEP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Chain reasoning steps");
  },
};

/**
 * Let binding block
 */
Blockly.Blocks["tactic_let"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Let")
      .appendField(new Blockly.FieldTextInput("x"), "VAR")
      .appendField(":=")
      .appendField(new Blockly.FieldTextInput("expr"), "EXPR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Let binding: let x := expr");
  },
};

/**
 * Use block
 */
Blockly.Blocks["tactic_use"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Use")
      .appendField(new Blockly.FieldTextInput("witness"), "WITNESS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Use a witness for ∃ (use witness)");
  },
};

/**
 * Split block (for ∧ or ↔)
 */
Blockly.Blocks["tactic_split"] = {
  init: function () {
    this.appendDummyInput().appendField("Split");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Split conjunction or biconditional");
  },
};

/**
 * Left block (for ∨)
 */
Blockly.Blocks["tactic_left"] = {
  init: function () {
    this.appendDummyInput().appendField("Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Choose left branch of disjunction");
  },
};

/**
 * Right block (for ∨)
 */
Blockly.Blocks["tactic_right"] = {
  init: function () {
    this.appendDummyInput().appendField("Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Choose right branch of disjunction");
  },
};

/**
 * Simplify block
 */
Blockly.Blocks["tactic_simp"] = {
  init: function () {
    this.appendDummyInput().appendField("Simplify");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Simplify the goal (simp)");
  },
};

/**
 * Reflexivity block
 */
Blockly.Blocks["tactic_rfl"] = {
  init: function () {
    this.appendDummyInput().appendField("Reflexivity");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Use reflexivity for equality (rfl)");
  },
};

/**
 * Contradiction block
 */
Blockly.Blocks["tactic_contradiction"] = {
  init: function () {
    this.appendDummyInput().appendField("Contradiction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Derive a contradiction");
  },
};

/**
 * Apply theorem block
 */
Blockly.Blocks["tactic_apply"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Apply")
      .appendField(new Blockly.FieldTextInput("theorem_name"), "THEOREM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Apply a theorem");
  },
};
