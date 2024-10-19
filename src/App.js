import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor () {
    this.input = ''
    this.delimeter = [',', ':']
    this.output = 0
  }

  async getUserInput() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      if (userInput === '') throw new Error('[Error]');

      this.input = userInput;
    } catch (error) {
      throw error;
    }
  }

  checkIsValidNumber(n) {
    try {
      const num = Number(n);
      if (Number.isNaN(num) || num < 0 ) throw new Error('[Error]')
      return num;
    } catch(error) {
      throw error;
    } 
  }

  add() {
    try {
      const reg = new RegExp(this.delimeter.join('|'))
      this.output = this.input.split(reg)
        .map((n) => this.checkIsValidNumber(n))
        .reduce((acc, cur) => acc + cur, 0);
    } catch(error) {
      throw error;
    }
  }

  async run() {
    try {
      await this.getUserInput();
      this.add();
      MissionUtils.Console.print(`결과 : ${this.output}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
