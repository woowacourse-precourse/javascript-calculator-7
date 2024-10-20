// @ts-check
import { _reduce } from '../util/util.js';

//덧셈기 게임 관리
class Calculator {
  /**
   * @param {number[]} numbers
   * @returns {number}
   */
  add(numbers) {
    return _reduce((acc, cur) => acc + cur, 0, numbers);
  }
}

export default Calculator;
