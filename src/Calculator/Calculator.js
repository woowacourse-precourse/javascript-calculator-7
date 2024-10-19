export class Calculator {
  constructor(numbers) {
    this.numbers = numbers;
  }

  add() {
    return this.numbers.reduce((acc, current) => acc + current);
  }
}
