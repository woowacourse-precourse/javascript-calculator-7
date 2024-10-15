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
    const arr = this.stringSpliter(this.str, this.seperator);
    this.output(arr);
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

  stringSpliter(str, seperator) {
    const regexp = new RegExp(`[${seperator.join('')}]`);
    const filterArr = str.split(regexp).filter((item) => item.length);

    return filterArr;
  }

  output(value) {
    const answer = value.reduce((prev, cur) => prev + Number(cur), 0);
    Console.print(RESULT_PREFIX + answer);
  }
}

export default App;
