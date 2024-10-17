import { Console } from '@woowacourse/mission-utils';

export default class Output {
  /**
   * @param {number} result 
   */
  static printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}