class StringAddCalculator {
  static sum(numbersArray) {
    return numbersArray.reduce((acc, value) => acc + parseInt(value), 0);
  }
}

export default StringAddCalculator;
