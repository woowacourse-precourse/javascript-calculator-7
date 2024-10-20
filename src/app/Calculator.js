import { calculateTotal } from '../lib/utils';
import Delimiter from './Delimiter';

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
