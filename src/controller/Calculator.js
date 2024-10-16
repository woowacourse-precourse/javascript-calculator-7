// @ts-check
import { Console } from '@woowacourse/mission-utils';
import User from '../user/User.js';
import { GAME_MESSAGE } from '../constants/gameMessages.js';
import { delimiter } from '../constants/delimiter.js';
import { go } from '../util/Util.js';

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

    // '//'로 시작한다면
    if (input.startsWith('//')) {
      return go(
        input,

        /**@type {(str:string) => string[]}  */
        (str) => str.split('\\n'),

        /**@type {(str:string[]) => {customDelimiter:string, numbersPart:string}}  */
        ([delimiterPart, numbersPart]) => ({
          customDelimiter: delimiterPart.slice(2),
          numbersPart,
        }),
        ({ customDelimiter, numbersPart }) =>
          numbersPart.split(customDelimiter),

        /**@type {(numbers:string[]) => number[]}  */
        (numbers) => numbers.map(Number),

        /**@type {(numbers:number[]) => number}   */
        (numbers) => numbers.reduce((acc, cur) => acc + cur),

        /**@type {(result: number) => void}   */
        (result) => this.printResult(result)
      );
    }

    // '//'로 시작하지 않고 일반 숫자가 먼저 입력된다면
    if (/^\d/.test(input)) {
      go(
        input,

        /**@type {(input:string) => string[]}  */
        (input) => input.split(delimiter),

        /**@type {(nums:string[]) => number[]}  */
        (nums) => nums.map(Number),

        /**@type {(nums:number[]) => number}   */
        (nums) => nums.reduce((acc, cur) => acc + cur),

        /**@type {(result: number) => void}   */
        (result) => this.printResult(result)
      );
    }
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
