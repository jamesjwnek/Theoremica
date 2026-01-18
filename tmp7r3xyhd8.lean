import Mathlib.Data.Real.Basic

theorem proof_positivity (x y : ℝ) (hx : x > 0) (hy : y > 0) : x + y > 0 :=
  add_pos hx hy
