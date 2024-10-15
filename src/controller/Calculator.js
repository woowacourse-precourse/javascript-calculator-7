// @ts-check
import { Console } from '@woowacourse/mission-utils';
import User from '../user/User.js';
import { GAME_MESSAGE } from '../constants/gameMessages.js';
import { delimiter } from '../constants/delimiter.js';

//덧셈기 게임 관리
class Calculator {
  constructor() {
    this.user = new User();
  }

  async start() {
    const input = await this.user.readAnswer();
    this.calculate(input);
  }

  /**@param {string} input */
  calculate(input) {
    //실제 계산 로직
    const result = input
      .split(delimiter)
      .map(Number)
      .reduce((acc, cur) => acc + cur);

    this.printResult(result);
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
