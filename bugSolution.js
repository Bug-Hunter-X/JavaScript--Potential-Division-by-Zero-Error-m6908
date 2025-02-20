function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs appropriately
  } else if (b === 0) {
    return NaN; // Explicitly return NaN for division by zero
  } else {
    return a / b;
  }
}

console.log(foo(10, 0)); // Output: NaN
console.log(foo(10, 2)); // Output: 5