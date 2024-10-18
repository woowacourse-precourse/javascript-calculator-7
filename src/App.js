import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  
    let delimiters = ['.', ':'];
    let inputString = input;
    if (this.isCustom(input)) {
      const [customDelimiter, newInputString] = this.splitCustom(input);
      delimiters.push(customDelimiter);
      inputString = newInputString;
    }

    
    Console.print(`결과 : ${inputString}`);
  }

  /** 커스텀 구분자 스트링인지 확인 */
  isCustom(input) {
    return input.startsWith('//');
  }

  /** \n 기준으로 나누고 구분자 추출 */
  splitCustom(input) {
    const [customDelimiterString, inputString] = input.split('\\n');
    const customDelimiter = customDelimiterString.slice(2);
    return [customDelimiter, inputString];
  }

  
}

export default App;
