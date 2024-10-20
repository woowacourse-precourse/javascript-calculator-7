export class Calculator {
  static DEFAULT_DELIMITERS = [',', ':'];
  static DEFAULT_DELIMITER_REGEX = /[,:]/;
  static CUSTOM_DELIMITER_REGEX = /^\/\/(.*)\\n/;

  constructor() {
    this.delimiterRegex = Calculator.DEFAULT_DELIMITER_REGEX;
    this.customDelimiter = null;
  }

  calculate(input) {
    let inputString = input;

    if (inputString === '') return 0;

    if (this.hasCustomDelimiter(inputString)) {
      this.configureCustomDelimiter(inputString);
      inputString = inputString.split('\\n')[1];
    }

    const numbers = this.parseNumbers(inputString);
    const sum = this.sumNumbers(numbers);

    return sum;
  }

  hasCustomDelimiter(input) {
    return Calculator.CUSTOM_DELIMITER_REGEX.test(input);
  }

  configureCustomDelimiter(input) {
    const match = input.match(Calculator.CUSTOM_DELIMITER_REGEX);
    if (match) {
      this.setCustomDelimiter(match[1]);
      this.delimiterRegex = new RegExp(
        `[${this.customDelimiter}${Calculator.DEFAULT_DELIMITERS.join('')}]`
      );
    }
  }

  parseNumbers(input) {
    return input.split(this.delimiterRegex).map((numString) => {
      const number = Number(numString.trim());
      if (number <= 0) throw new Error('[ERROR] Only positive number allowed');

      if (isNaN(number)) throw new Error('[ERROR] Invalid number encountered ');

      return number;
    });
  }

  sumNumbers(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  setCustomDelimiter(delimiter) {
    this.customDelimiter = delimiter;
  }
}
