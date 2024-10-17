export default class Calculator {
  constructor(input) {
    this.input = input;
    this.delimiter = [',', ':'];
  }


  calculate() {

    const input = this.input.split(new RegExp(`[${this.delimiter.join('')}\n]`));

    const sum = input.map(Number).reduce((acc, cur) => acc + cur, 0);
    return sum;
  }
}