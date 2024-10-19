export class Calculator {
  constructor() {
    this.defaultDelimiters = [',', ':'];
    this.separatorRegex = /[,:]/;
    this.customDelimiter = null;
  }

  calculate(input) {
    if (input === '') return 0;

    if (this.hasCustomDelimiter(input)) {
      input = input.split('\\n')[1];
    }

    const numbers = this.parseNumbers(input);
    const sum = this.sumNumbers(numbers);

    return sum;
  }

  hasCustomDelimiter(input) {
    const regex = /^\/\/(.*)\\n/;
    const match = input.match(regex);

    if (match) {
      this.setCustomDelimiter(match[1]);
      this.separatorRegex = new RegExp(
        `[${this.customDelimiter}${this.defaultDelimiters.join('')}]`
      );
      return true;
    } else return false;
  }

  parseNumbers(input) {
    return input.split(this.separatorRegex).map((stringNumber) => {
      const number = Number(stringNumber.trim());
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
