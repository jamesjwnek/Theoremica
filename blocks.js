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

/**
 * Custom Text block (simple version)
 */
Blockly.Blocks["custom_text"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("custom text here"), "TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Add custom text");
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

/**
 * True (⊤)
 */
Blockly.Blocks["logic_true"] = {
  init: function () {
    this.appendDummyInput().appendField("⊤ (True)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Truth: ⊤");
  },
};

/**
 * False (⊥)
 */
Blockly.Blocks["logic_false"] = {
  init: function () {
    this.appendDummyInput().appendField("⊥ (False)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Falsehood: ⊥");
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

/**
 * Relation
 */
Blockly.Blocks["set_relation"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField(new Blockly.FieldTextInput("R"), "RELATION")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Binary relation: a R b");
  },
};

/**
 * Cartesian Product (×)
 */
Blockly.Blocks["set_cartesian"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("A"), "LEFT")
      .appendField("×")
      .appendField(new Blockly.FieldTextInput("B"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Cartesian product: A × B");
  },
};

/**
 * Power Set (𝒫)
 */
Blockly.Blocks["set_powerset"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("𝒫(")
      .appendField(new Blockly.FieldTextInput("A"), "SET")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Power set: 𝒫(A)");
  },
};

/**
 * Cardinality (|A|)
 */
Blockly.Blocks["set_cardinality"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("|")
      .appendField(new Blockly.FieldTextInput("A"), "SET")
      .appendField("|");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Cardinality: |A|");
  },
};

/**
 * Complement (Aᶜ)
 */
Blockly.Blocks["set_complement"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("A"), "SET")
      .appendField("ᶜ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set complement: Aᶜ");
  },
};

/**
 * Function Composition (∘)
 */
Blockly.Blocks["set_compose"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("f"), "LEFT")
      .appendField("∘")
      .appendField(new Blockly.FieldTextInput("g"), "RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Function composition: f ∘ g");
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

/**
 * Greatest Common Divisor (gcd)
 */
Blockly.Blocks["arith_gcd"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("gcd(")
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField(",")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Greatest common divisor: gcd(a, b)");
  },
};

/**
 * Least Common Multiple (lcm)
 */
Blockly.Blocks["arith_lcm"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("lcm(")
      .appendField(new Blockly.FieldTextInput("a"), "LEFT")
      .appendField(",")
      .appendField(new Blockly.FieldTextInput("b"), "RIGHT")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Least common multiple: lcm(a, b)");
  },
};

/**
 * Factorial (!)
 */
Blockly.Blocks["arith_factorial"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("n"), "VALUE")
      .appendField("!");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Factorial: n!");
  },
};

/**
 * Floor (⌊x⌋)
 */
Blockly.Blocks["arith_floor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("⌊")
      .appendField(new Blockly.FieldTextInput("x"), "VALUE")
      .appendField("⌋");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Floor function: ⌊x⌋");
  },
};

/**
 * Ceiling (⌈x⌉)
 */
Blockly.Blocks["arith_ceiling"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("⌈")
      .appendField(new Blockly.FieldTextInput("x"), "VALUE")
      .appendField("⌉");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Ceiling function: ⌈x⌉");
  },
};

/**
 * Absolute Value (|x|)
 */
Blockly.Blocks["arith_abs"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("|")
      .appendField(new Blockly.FieldTextInput("x"), "VALUE")
      .appendField("|");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Absolute value: |x|");
  },
};

/**
 * Summation (∑)
 */
Blockly.Blocks["arith_sum"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∑")
      .appendField(new Blockly.FieldTextInput("i"), "VAR")
      .appendField(",")
      .appendField(new Blockly.FieldTextInput("expr"), "EXPR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Summation: ∑ i, expr");
  },
};

/**
 * Product (∏)
 */
Blockly.Blocks["arith_prod"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∏")
      .appendField(new Blockly.FieldTextInput("i"), "VAR")
      .appendField(",")
      .appendField(new Blockly.FieldTextInput("expr"), "EXPR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Product: ∏ i, expr");
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

// ============================================================================
// CONTAINER VERSIONS (DUPLICATE BLOCKS WITH NESTED CAPABILITY)
// ============================================================================

/**
 * Assume block (container version)
 */
Blockly.Blocks["proof_assume_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Assume:");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("State an assumption (with nested blocks)");
    this.setHelpUrl("");
  },
};

/**
 * Therefore block (container version)
 */
Blockly.Blocks["proof_therefore_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Therefore:");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("State a logical conclusion (with nested blocks)");
    this.setHelpUrl("");
  },
};

/**
 * Universal Quantifier (∀) - container version
 */
Blockly.Blocks["logic_forall_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∀");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Universal quantifier: ∀ x, P(x) (with nested blocks)");
  },
};

/**
 * Existential Quantifier (∃) - container version
 */
Blockly.Blocks["logic_exists_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∃");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Existential quantifier: ∃ x, P(x) (with nested blocks)");
  },
};

/**
 * Implication (→) - container version
 */
Blockly.Blocks["logic_implies_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("→");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Implication: P → Q (with nested blocks)");
  },
};

/**
 * Biconditional (↔) - container version
 */
Blockly.Blocks["logic_iff_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("↔");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Biconditional: P ↔ Q (with nested blocks)");
  },
};

/**
 * Negation (¬) - container version
 */
Blockly.Blocks["logic_not_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("¬");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Negation: ¬P (with nested blocks)");
  },
};

/**
 * Conjunction (∧) - container version
 */
Blockly.Blocks["logic_and_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∧");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Conjunction: P ∧ Q (with nested blocks)");
  },
};

/**
 * Disjunction (∨) - container version
 */
Blockly.Blocks["logic_or_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∨");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Disjunction: P ∨ Q (with nested blocks)");
  },
};

/**
 * Equality (=) - container version
 */
Blockly.Blocks["logic_eq_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("=");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Equality: a = b (with nested blocks)");
  },
};

/**
 * Inequality (≠) - container version
 */
Blockly.Blocks["logic_neq_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("≠");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Inequality: a ≠ b (with nested blocks)");
  },
};

/**
 * True - container version
 */
Blockly.Blocks["logic_true_container"] = {
  init: function () {
    this.appendDummyInput().appendField("⊤");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Truth: ⊤ (with nested blocks)");
  },
};

/**
 * False - container version
 */
Blockly.Blocks["logic_false_container"] = {
  init: function () {
    this.appendDummyInput().appendField("⊥");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Falsehood: ⊥ (with nested blocks)");
  },
};

/**
 * Set Membership (∈) - container version
 */
Blockly.Blocks["set_elem_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∈");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set membership: x ∈ S (with nested blocks)");
  },
};

/**
 * Set Non-membership (∉) - container version
 */
Blockly.Blocks["set_not_elem_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∉");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set non-membership: x ∉ S (with nested blocks)");
  },
};

/**
 * Subset (⊆) - container version
 */
Blockly.Blocks["set_subset_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("⊆");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Subset: A ⊆ B (with nested blocks)");
  },
};

/**
 * Proper Subset (⊂) - container version
 */
Blockly.Blocks["set_proper_subset_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("⊂");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Proper subset: A ⊂ B (with nested blocks)");
  },
};

/**
 * Union (∪) - container version
 */
Blockly.Blocks["set_union_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∪");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Union: A ∪ B (with nested blocks)");
  },
};

/**
 * Intersection (∩) - container version
 */
Blockly.Blocks["set_intersection_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∩");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Intersection: A ∩ B (with nested blocks)");
  },
};

/**
 * Set Difference (\) - container version
 */
Blockly.Blocks["set_difference_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("\\");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set difference: A \\ B (with nested blocks)");
  },
};

/**
 * Empty Set (∅) - container version
 */
Blockly.Blocks["set_empty_container"] = {
  init: function () {
    this.appendDummyInput().appendField("∅");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Empty set: ∅ (with nested blocks)");
  },
};

/**
 * Function Application f(x) - container version
 */
Blockly.Blocks["set_function_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("f(x)");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Function application: f(x) (with nested blocks)");
  },
};

/**
 * Relation - container version
 */
Blockly.Blocks["set_relation_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("R");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Binary relation: a R b (with nested blocks)");
  },
};

/**
 * Cartesian Product - container version
 */
Blockly.Blocks["set_cartesian_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("×");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Cartesian product: A × B (with nested blocks)");
  },
};

/**
 * Power Set - container version
 */
Blockly.Blocks["set_powerset_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("𝒫");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Power set: 𝒫(A) (with nested blocks)");
  },
};

/**
 * Cardinality - container version
 */
Blockly.Blocks["set_cardinality_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("| |");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Cardinality: |A| (with nested blocks)");
  },
};

/**
 * Complement - container version
 */
Blockly.Blocks["set_complement_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("ᶜ");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Set complement: Aᶜ (with nested blocks)");
  },
};

/**
 * Function Composition - container version
 */
Blockly.Blocks["set_compose_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∘");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("Function composition: f ∘ g (with nested blocks)");
  },
};

/**
 * Addition (+) - container version
 */
Blockly.Blocks["arith_add_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("+");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Addition: a + b (with nested blocks)");
  },
};

/**
 * Subtraction (-) - container version
 */
Blockly.Blocks["arith_sub_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("-");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Subtraction: a - b (with nested blocks)");
  },
};

/**
 * Multiplication (*) - container version
 */
Blockly.Blocks["arith_mul_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("*");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Multiplication: a * b (with nested blocks)");
  },
};

/**
 * Division (/) - container version
 */
Blockly.Blocks["arith_div_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("/");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Division: a / b (with nested blocks)");
  },
};

/**
 * Exponentiation (^) - container version
 */
Blockly.Blocks["arith_pow_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("^");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Exponentiation: a ^ n (with nested blocks)");
  },
};

/**
 * Divides (∣) - container version
 */
Blockly.Blocks["arith_divides_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∣");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Divides: a ∣ b (with nested blocks)");
  },
};

/**
 * Modular Congruence (≡) - container version
 */
Blockly.Blocks["arith_mod_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("≡ [MOD]");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Modular congruence: a ≡ b [MOD n] (with nested blocks)");
  },
};

/**
 * Less than or equal (≤) - container version
 */
Blockly.Blocks["arith_le_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("≤");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Less than or equal: a ≤ b (with nested blocks)");
  },
};

/**
 * Less than (<) - container version
 */
Blockly.Blocks["arith_lt_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Less than: a < b (with nested blocks)");
  },
};

/**
 * Greater than or equal (≥) - container version
 */
Blockly.Blocks["arith_ge_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("≥");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Greater than or equal: a ≥ b (with nested blocks)");
  },
};

/**
 * Greater than (>) - container version
 */
Blockly.Blocks["arith_gt_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(">");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Greater than: a > b (with nested blocks)");
  },
};

/**
 * Greatest Common Divisor (gcd) - container version
 */
Blockly.Blocks["arith_gcd_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("gcd");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Greatest common divisor: gcd(a, b) (with nested blocks)");
  },
};

/**
 * Least Common Multiple (lcm) - container version
 */
Blockly.Blocks["arith_lcm_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("lcm");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Least common multiple: lcm(a, b) (with nested blocks)");
  },
};

/**
 * Factorial (!) - container version
 */
Blockly.Blocks["arith_factorial_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("!");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Factorial: n! (with nested blocks)");
  },
};

/**
 * Floor - container version
 */
Blockly.Blocks["arith_floor_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("⌊⌋");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Floor function: ⌊x⌋ (with nested blocks)");
  },
};

/**
 * Ceiling - container version
 */
Blockly.Blocks["arith_ceiling_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("⌈⌉");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Ceiling function: ⌈x⌉ (with nested blocks)");
  },
};

/**
 * Absolute Value - container version
 */
Blockly.Blocks["arith_abs_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("| |");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Absolute value: |x| (with nested blocks)");
  },
};

/**
 * Summation (∑) - container version
 */
Blockly.Blocks["arith_sum_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∑");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Summation: ∑ i, expr (with nested blocks)");
  },
};

/**
 * Product (∏) - container version
 */
Blockly.Blocks["arith_prod_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("∏");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Product: ∏ i, expr (with nested blocks)");
  },
};

/**
 * Assume block (for intro tactic) - container version
 */
Blockly.Blocks["tactic_assume_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Assume");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Assume a hypothesis (intro tactic) (with nested blocks)");
  },
};

/**
 * Suppose block (for negation proofs) - container version
 */
Blockly.Blocks["tactic_suppose_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Suppose");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Suppose a negation hypothesis (intro h) (with nested blocks)");
  },
};

/**
 * Case analysis block - container version
 */
Blockly.Blocks["tactic_case_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Case");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Case analysis (case zero/step/left/right) (with nested blocks)");
  },
};

/**
 * Then block (chaining reasoning) - container version
 */
Blockly.Blocks["tactic_then_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Then");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Chain reasoning steps (with nested blocks)");
  },
};

/**
 * Let binding block - container version
 */
Blockly.Blocks["tactic_let_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Let");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Let binding: let x := expr (with nested blocks)");
  },
};

/**
 * Use block - container version
 */
Blockly.Blocks["tactic_use_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Use");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Use a witness for ∃ (use witness) (with nested blocks)");
  },
};

/**
 * Split block (for ∧ or ↔) - container version
 */
Blockly.Blocks["tactic_split_container"] = {
  init: function () {
    this.appendDummyInput().appendField("Split");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Split conjunction or biconditional (with nested blocks)");
  },
};

/**
 * Left block (for ∨) - container version
 */
Blockly.Blocks["tactic_left_container"] = {
  init: function () {
    this.appendDummyInput().appendField("Left");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Choose left branch of disjunction (with nested blocks)");
  },
};

/**
 * Right block (for ∨) - container version
 */
Blockly.Blocks["tactic_right_container"] = {
  init: function () {
    this.appendDummyInput().appendField("Right");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Choose right branch of disjunction (with nested blocks)");
  },
};

/**
 * Simplify block - container version
 */
Blockly.Blocks["tactic_simp_container"] = {
  init: function () {
    this.appendDummyInput().appendField("Simplify");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Simplify the goal (simp) (with nested blocks)");
  },
};

/**
 * Reflexivity block - container version
 */
Blockly.Blocks["tactic_rfl_container"] = {
  init: function () {
    this.appendDummyInput().appendField("Reflexivity");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Use reflexivity for equality (rfl) (with nested blocks)");
  },
};

/**
 * Contradiction block - container version
 */
Blockly.Blocks["tactic_contradiction_container"] = {
  init: function () {
    this.appendDummyInput().appendField("Contradiction");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Derive a contradiction (with nested blocks)");
  },
};

/**
 * Apply theorem block - container version
 */
Blockly.Blocks["tactic_apply_container"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Apply");
    this.appendStatementInput("NESTED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Apply a theorem (with nested blocks)");
  },
};
