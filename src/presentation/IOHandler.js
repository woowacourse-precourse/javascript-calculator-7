import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../constant/MESSAGE.js';
import { IOPort } from '../application/IOPort.js';

const Console = MissionUtils.Console;

export default class IOHandler extends IOPort {
  async getInput() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.INPUT_GUIDE);
    return input;
  }
  displayResult(result) {
    Console.print(OUTPUT_MESSAGE.RESULT(result));
  }
}
