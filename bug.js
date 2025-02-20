function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Correct handling of zero inputs
  }
  return a / b; // Potential division by zero if b is zero
}

console.log(foo(10, 0)); // Output: Infinity