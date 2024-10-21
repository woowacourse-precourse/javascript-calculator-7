import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';

class App {
  async getInput() {
    return await Console.readLineAsync(`${MESSAGE.INPUT}`);
  }

  async run() {
    const input = await this.getInput();
  }
}

export default App;
