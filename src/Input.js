import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constants/message.js';
import { ERROR_MESSAGE } from './constants/error.js';

export default class Input {
  async getInput() {
    try {
      const input = await Console.readLineAsync(`${INPUT_MESSAGE}`);
      return input;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.INPUT_ERROR);
    }
  }
}