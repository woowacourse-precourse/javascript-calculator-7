// @ts-check
import throwError from '../util/errorThrower.js';
import { ERROR_MESSAGE } from '../constants/errorMessages.js';

//덧셈기 게임 관리
class Calculator {
  /**
   * @param {number[]} numbers
   * @returns {void}
   */
  calculate(numbers) {
    throwError(`${ERROR_MESSAGE.NO_CALCULATE} ${numbers}`);
  }
}

export default Calculator;
