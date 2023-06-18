const factorial = require('./factorial');

test('Factorial of 0 should return 1', () => {
  expect(factorial(0)).toBe(1);
});

test('Factorial of a positive number should be calculated correctly', () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(7)).toBe(5040);
  expect(factorial(10)).toBe(3628800);
});

test('Factorial of a negative number should throw an error', () => {
  expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers');
});
