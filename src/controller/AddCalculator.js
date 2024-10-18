//@ts-check
import { _reduce } from '../util/util.js';
import Calculator from './Calculator.js';

class AddCalculator extends Calculator {
  /**
   * @param {number[]} numbers
   * @returns {number}
   */
  operation(numbers) {
    return _reduce((acc, cur) => acc + cur, 0, numbers);
  }
}

export default AddCalculator;
