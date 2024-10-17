import { Console } from '@woowacourse/mission-utils';
import { INPUT_GUIDE_MESSAGE } from '../constant/input.js';
import { ERROR_MESSAGE } from '../constant/error.js';

export default class Input {
  /**
   * @returns {Promise<string>}
   */
  static async readLine() {
    try {
      return await Console.readLineAsync(INPUT_GUIDE_MESSAGE + '\n');
    } catch {
      throw new Error(ERROR_MESSAGE.FAILED_READ_LINE);
    }
  }
}