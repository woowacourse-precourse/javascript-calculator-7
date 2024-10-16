import { Console } from '@woowacourse/mission-utils';
import { INTRO, RESULT_PREFIX } from './constant.js';
import Validator from './Validator.js';

class App {
  constructor() {
    this.str = '';
    this.seperator = [',', ':'];
  }

  async run() {
    await this.input();
    this.analysis(this.str);
    Validator.customSeperator(this.seperator);
    const arr = this.stringSplitter(this.str);
    Validator.parseNumber(arr);
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
      this.str = str.replace(patternFullItem, '');
    });
  }

  stringSplitter(str) {
    const regexp = new RegExp(`[${this.seperator.join('')}]`);
    const filterArr = str.split(regexp).filter((item) => item.length);
    return filterArr;
  }

  output(value) {
    const answer = value.reduce((prev, cur) => prev + Number(cur), 0);
    Console.print(RESULT_PREFIX + answer);
  }
}

export default App;
