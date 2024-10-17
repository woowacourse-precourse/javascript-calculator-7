import Validator from './Validator.js';
import IOManager from './IOManager.js';

class App {
  constructor() {
    this.str = '';
    this.seperator = [',', ':'];
  }

  async run() {
    this.str = await IOManager.input();
    this.analysis(this.str);
    Validator.customSeperator(this.seperator);
    const arr = this.stringSplitter(this.str);
    Validator.parseNumber(arr);
    const answer = arr.reduce((prev, cur) => prev + Number(cur), 0);
    IOManager.output(answer);
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
}

export default App;
