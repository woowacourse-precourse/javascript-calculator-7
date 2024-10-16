import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  
    let customDelimiter;
    let inputString = input;
    if (this.isCustom(input)) {
      [customDelimiter, inputString] = this.splitCustom(input);
    }
    
    MissionUtils.Console.print(`결과 : ${inputString}`);
  }

  /** \n 기준으로 나누고 구분자 추출 */
  splitCustom(input) {
    const [customDelimiterString, inputString] = input.split('\\n');
    const customDelimiter = customDelimiterString.slice(2);
    return [customDelimiter, inputString];
  }

  isCustom(input) {
    return input.startsWith('//');
  }

  
}

export default App;
