class Calculator {
  getSumOf(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }

  isPositive(numbers) {
    return numbers.every((number) => number > 0);
  }
}

export default Calculator;
