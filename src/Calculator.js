class Calculator {
  static sum(numbers) {
    return numbers.reduce((cur, acc) => cur + acc, 0);
  }
}

export default Calculator;
