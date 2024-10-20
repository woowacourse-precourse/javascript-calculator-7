import { calculateTotal } from '../lib/utils';

class Calculator {
  /**
   *
   * @param {Array<string>} values
   * @returns {number}
   */
  calculate(values) {
    return calculateTotal(values.map(Number));
  }
}

export default Calculator;
