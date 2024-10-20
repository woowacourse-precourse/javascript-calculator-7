import { MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';

class Output {
  // 결과 출력
  printCalcResult(calcResult) {
    Console.print(`${MESSAGES.OUTPUT_RESULT}${calcResult}`);
  }
}

export default Output;
