// @ts-check
import { Console } from '@woowacourse/mission-utils';
import User from '../user/User.js';
import { GAME_MESSAGE } from '../constants/gameMessages.js';
import { DELIMITER } from '../constants/delimiter.js';
import { _go } from '../util/util.js';

//덧셈기 게임 관리
class Calculator {
  /**@param {User} user */
  constructor(user) {
    this.user = user;
  }

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

      /**@type {(numbers:number[]) => number}   */
      (numbers) => numbers.reduce((acc, cur) => acc + cur),

      /**@type {(result: number) => void}   */
      (result) => this.printResult(result)
    );
  }

  /**
   * @param {string} input
   * @returns {string[]}
   */
  parseInput(input) {
    if (input.startsWith('//')) {
      const [delimiterPart, numbersPart] = input.split('\\n');
      const customDelimiter = delimiterPart.slice(2);
      return numbersPart.split(customDelimiter);
    }
    return input.split(DELIMITER);
  }

  /**@param {number} result */
  printResult(result) {
    this.printMessage(`${GAME_MESSAGE.RESULT} ${result}`);
  }

  /**@param {string} message */
  printMessage(message) {
    Console.print(message);
  }
}

export default Calculator;
