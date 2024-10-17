import { Console } from '@woowacourse/mission-utils';
import { INTRO, RESULT_PREFIX } from './constant.js';

class IOManager {
  static async input() {
    const string = await Console.readLineAsync(INTRO);
    return string;
  }

  static output(value) {
    Console.print(RESULT_PREFIX + value);
  }
}

export default IOManager;
