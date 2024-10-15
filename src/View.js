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
}

export default View;
