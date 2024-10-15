import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INTRO, RESULT_PREFIX } from './constant.js';

class App {
  constructor() {
    this.str = '';
    this.seperator = [',', ':'];
  }

  async run() {
    await this.input();
    this.analysis(this.str);
  }

  async input() {
    const input = await Console.readLineAsync(INTRO);
    this.str = input;
  }

  analysis(str) {
    const pattern = /\/\/(.*?)\\n/g;
    Array.from(str.matchAll(pattern)).forEach((item) => {
      const [patternFullItem, newSeperator] = item;
      this.seperator.push(newSeperator);
      str = str.replace(patternFullItem, '');
    });

    this.str = str;
  }
}

export default App;
