class StringAdditionCalculator {
  calculate(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default StringAdditionCalculator;
