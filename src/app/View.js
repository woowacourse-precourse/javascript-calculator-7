import { Console } from '@woowacourse/mission-utils';
import { trimWhitespace } from '../lib/utils.js';

class View {
  /**
   *
   * @param {string} query
   * @returns {Promise<string>}
   */
  async input(query) {
    const value = await Console.readLineAsync(`${query}\n`);

    return trimWhitespace(value);
  }

  /**
   *
   * @param {string} message
   * @returns {void}
   */
  output(message) {
    Console.print(message);
  }
}

export default View;
