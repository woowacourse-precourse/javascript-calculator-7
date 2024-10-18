export class Calculator {
  static SEPARATOR_REGEX = /[,:]/;

  static calculate(input) {
    if (input === '') return 0;

    const numbers = this.parseNumbers(input);
    const sum = this.sumNumbers(numbers)

    return sum
  }

  static parseNumbers(input) {
    return input.split(this.SEPARATOR_REGEX).map((num) => Number(num.trim()));
  }

  static sumNumbers(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
