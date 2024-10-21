export default class CalculationModel {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }
}
