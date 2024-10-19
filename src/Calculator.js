export class Calculator {
  static DEFAULT_DELIMITERS = [',', ':'];
  static DEFAULT_DELIMITER_REGEX = /[,:]/;
  
  constructor() {
    this.delimiterRegex = Calculator.DEFAULT_DELIMITER_REGEX;
    this.customDelimiter = null;
  }

  calculate(input) {
    let inputString = input;

    if (inputString === '') return 0;

    if (this.hasCustomDelimiter(inputString)) {
      inputString = inputString.split('\\n')[1];
    }

    const numbers = this.parseNumbers(inputString);
    const sum = this.sumNumbers(numbers);

    return sum;
  }

  hasCustomDelimiter(input) {
    const customDelimiterRegex = /^\/\/(.*)\\n/;
    const match = input.match(customDelimiterRegex);

    if (match) {
      this.setCustomDelimiter(match[1]);
      this.delimiterRegex = new RegExp(
        `[${this.customDelimiter}${Calculator.DEFAULT_DELIMITERS.join('')}]`
      );
      return true;
    } else return false;
  }

  parseNumbers(input) {
    return input.split(this.delimiterRegex).map((numString) => {
      const number = Number(numString.trim());
      if (number <= 0 || isNaN(number)) throw new Error('[ERROR]');
      else return number;
    });
  }

  sumNumbers(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  setCustomDelimiter(delimiter) {
    this.customDelimiter = delimiter;
  }
}
