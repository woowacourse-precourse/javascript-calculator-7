import { calculateTotal } from '../lib/utils.js';
import Delimiter from './Delimiter.js';

class Calculator {
  /** @type {Delimiter} */
  #delimiter;

  constructor(delimiter) {
    this.#delimiter = delimiter;
  }
  /**
   *
   * @param {string} value
   * @returns {number}
   */
  calculate(value) {
    return calculateTotal(this.#delimiter.splitByDelimiters(value).map(Number));
  }
}

export default Calculator;
