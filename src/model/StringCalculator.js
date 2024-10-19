class StringCalculator {
  static extractNumbers(input, delimiter) {
    return input.split(delimiter).map((number) => parseInt(number, 10));
  }
}

export default StringCalculator;
