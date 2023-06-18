function factorial(n) {
    if (n < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    } else if (n === 0) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  }
  
  module.exports = factorial;
  