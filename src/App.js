import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor () {
    this.input = ''
    this.delimiter = [',', ':']
    this.output = 0
  }

  async getUserInput() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      if (userInput === '') throw new Error('[ERROR]');

      this.input = userInput;
    } catch (error) {
      throw error;
    }
  }

  checkIsValidNumber(n) {
    try {
      const num = Number(n);
      if (Number.isNaN(num) || num < 0 ) throw new Error('[ERROR]')
      return num;
    } catch(error) {
      throw error;
    } 
  }

  checkCustomDelimiter() {
    const getCustomDelimiterRegExp = /\/\/([\s\S]*?)\\n([\s\S]*)/;
    const matchResult = this.input.match(getCustomDelimiterRegExp);
    if (matchResult) {
      const customDelimiter = matchResult[1];
      for (const c of customDelimiter) {
        this.delimiter.push(c)
      }
      this.input = matchResult[2]
    }
  }

  add() {
    try {
      const reg = new RegExp(`[${this.delimiter.join()}]`)
      this.output = this.input.split(reg)
        .map(this.checkIsValidNumber)
        .reduce((acc, cur) => acc + cur, 0);
    } catch(error) {
      throw error;
    }
  }

  async run() {
    try {
      await this.getUserInput();
      this.checkCustomDelimiter();
      this.add();
      MissionUtils.Console.print(`결과 : ${this.output}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
