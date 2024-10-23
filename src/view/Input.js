import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/error.js';

class Input {
  INPUT_GUIDE_MESSAGE = '덧셈할 문자열을 입력해 주세요.';

  /**
   * @returns {Promise<string>}
   */
  static async readLine() {
    try {
      return await Console.readLineAsync(this.INPUT_GUIDE_MESSAGE + '\n');
    } catch {
      throw new Error(ERROR_MESSAGE.FAILED_READ_LINE);
    }
  }
}

export default Input;
