// @ts-check
import User from '../user/User.js';
import { DELIMITER } from '../constants/delimiter.js';
import { _go, extractCustomDelimiter } from '../util/util.js';
import OutputView from '../view/OutputView.js';
import throwError from '../util/errorThrower.js';
import { ERROR_MESSAGE } from '../constants/errorMessages.js';

//덧셈기 게임 관리
class Calculator {
  /**@param {User} user */
  constructor(user) {
    this.user = user;
  }

  /**@returns {Promise<void>} */
  async start() {
    const input = await this.user.readAnswer();
    this.calculate(input);
  }

  /**@param {string} input */
  calculate(input) {
    //실제 계산 로직
    _go(
      input,
      this.parseInput,
      /**@type {(numbers:string[]) => number[]}  */
      (numbers) => numbers.map(Number),
      this.operation,
      /**@type {(result: number) => void}   */
      (result) => OutputView.printResult(result)
    );
  }

  /**
   *
   * @param {number[]} numbers
   * @returns {void}
   */
  operation(numbers) {
    throwError(`${ERROR_MESSAGE.NO_OPERATION} ${numbers}`);
  }

  /**
   * @param {string} input
   * @returns {string[]}
   */
  parseInput(input) {
    const customDelimiter = extractCustomDelimiter(input);
    if (customDelimiter) {
      const [, numbersPart] = input.split('\\n');
      return numbersPart.split(customDelimiter);
    }
    return input.split(DELIMITER);
  }
}

export default Calculator;
