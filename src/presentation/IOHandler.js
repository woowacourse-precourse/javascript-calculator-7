import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../constant/MESSAGE.js';
import { IOPort } from '../application/IOPort.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const { Console } = MissionUtils;

export default class IOHandler extends IOPort {
  static async getInput() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.INPUT_GUIDE);

    return input;
  }

  static displayResult(result) {
    Console.print(OUTPUT_MESSAGE.result(result));
  }
}
