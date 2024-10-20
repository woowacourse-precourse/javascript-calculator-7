class Calculator {
  static getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default Calculator;
