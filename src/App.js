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
      if (userInput === '') throw new Error('[ERROR] 구분자와 양수로 구성된 문자열을 입력해 주세요');

      this.input = userInput;
    } catch (error) {
      throw error;
    }
  }

  checkIsValidNumber(n) {
    try {
      const num = Number(n);
      if (Number.isNaN(num) || num < 0 ) throw new Error('[ERROR] 구분자와 양수로 구성된 문자열이 아닙니다.')
      return num;
    } catch(error) {
      throw error;
    } 
  }

  checkCustomDelimiter() {
    try{
      const getCustomDelimiterRegExp = /\/\/([\s\S]*?)\\n([\s\S]*)/;
      const matchResult = this.input.match(getCustomDelimiterRegExp);

      if (matchResult) {
        if (this.input.startsWith('//')) {
          const customDelimiter = matchResult[1];
          for (const c of customDelimiter) {
            this.delimiter.push(c)
          }
          this.input = matchResult[2]
        }
        // 정규표현식의 결과는 있지만, 문자열 앞에 위치하지 않은 경우
        else throw new Error('[ERROR] 커스텀 구분자는 문자열 앞부분에 위치해야 합니다.')
      }
      // 정규표현식의 결과는 없지만, /로 시작하는 경우 커스텀 구분자를 잘못 썼을 것으로 추론
      else if (this.input.startsWith('/')) {
        throw new Error('[ERROR] 커스텀 구분자는 "//"와 "\\n" 사이에 위치해야 합니다.')
      }
    } catch(error) {
      throw error
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
