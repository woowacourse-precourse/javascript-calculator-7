import { Console } from '@woowacourse/mission-utils';

class View {
  /**
   *
   * @param {string} query
   * @returns {Promise<string>}
   */
  async input(query) {
    return await Console.readLineAsync(`${query}\n`);
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
