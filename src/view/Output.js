import { Console } from '@woowacourse/mission-utils';

class Output {
  /**
   * @param {number} result 
   */
  static printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default Output;
