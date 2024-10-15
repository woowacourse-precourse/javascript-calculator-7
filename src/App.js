import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INTRO, RESULT_PREFIX } from './constant.js';

class App {
  constructor() {
    this.str = '';
  }

  async run() {
    await this.input();
    this.output(this.str);
  }

  async input() {
    const input = await Console.readLineAsync(INTRO);
    this.str = input;
  }

  output(value) {
    Console.print(RESULT_PREFIX + value);
  }
}

export default App;
