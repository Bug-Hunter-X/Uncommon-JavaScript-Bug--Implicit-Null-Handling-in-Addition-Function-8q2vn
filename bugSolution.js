function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Handle both null values explicitly
  } else if (a === null || b === null) {
    return 0; // Handle cases where one value is null
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

// Added documentation for clarity
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b, or 0 if either or both are null.
 */