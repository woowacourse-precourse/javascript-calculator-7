class Calculator {
  calculateSum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
}

export default Calculator;