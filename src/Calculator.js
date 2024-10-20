import { splitByCustomSeparator, splitByDefaultSeparators } from './utils/index.js';
import Validator from './Validator.js';

class Calculator {
  #input = '';

  #result = 0;

  constructor(value) {
    this.#input = value;
  }

  calculate() {
    Validator.checkNegativeInput(this.#input);
    this.#parseAndSplitInput();
    Validator.checkSplitResult(this.#input, this.#result);
    return Calculator.#calculateSum(this.#result);
  }

  #parseAndSplitInput() {
    if (this.#input.startsWith('//')) {
      const result = splitByCustomSeparator(this.#input);
      Validator.checkResultNull(result);
      this.#result = result;
    } else {
      this.#result = splitByDefaultSeparators(this.#input);
    }
  }

  static #calculateSum(result) {
    let sum = 0;
    result.forEach((v) => {
      sum += +v;
    });
    return sum;
  }
}

export default Calculator;
