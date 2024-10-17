import { MESSAGES, ROUND_NUMBER } from './constants.js';
import { Console } from '@woowacourse/mission-utils';

class Output {
  // 결과 출력
  printCalcResult(calcResult) {
    const roundedResult = Math.round(calcResult * ROUND_NUMBER) / ROUND_NUMBER;
    Console.print(`${MESSAGES.OUTPUT_RESULT}${roundedResult}`);
  }
}

export default Output;
