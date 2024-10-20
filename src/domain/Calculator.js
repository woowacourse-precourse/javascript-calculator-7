class Calculator {
  static #INITIAL_TOTAL = 0;

  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  add() {
    const total = this.#numbers.reduce((acc, cur) => {
      const sum = acc + cur;

      return sum;
    }, Calculator.#INITIAL_TOTAL);

    return total;
  }
}

export default Calculator;
