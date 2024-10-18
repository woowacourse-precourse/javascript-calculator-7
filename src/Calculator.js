export class Calculator {
  constructor(separatorRegex = /[,:]/) {
    this.separatorRegex = separatorRegex;
  }

  calculate(input) {
    if (input === '') return 0;

    const numbers = this.parseNumbers(input);
    const sum = this.sumNumbers(numbers);

    return sum;
  }

  parseNumbers(input) {
    return input.split(this.separatorRegex).map((num) => Number(num.trim()));
  }

  sumNumbers(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
