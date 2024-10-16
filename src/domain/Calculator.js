import { INITIAL_SUM } from '../constants/value';

class Calculator {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  add() {
    const sum = this.#numbers.reduce((acc, cur) => acc + cur, INITIAL_SUM);

    return sum;
  }
}

export default Calculator;
