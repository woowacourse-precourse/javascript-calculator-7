import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  
    let delimiters = [',', ':'];
    let inputString = input;
    if (this.isCustom(input)) {
      const [customDelimiter, newInputString] = this.splitCustom(input);
      delimiters.push(customDelimiter);
      inputString = newInputString;
    }

    let result = 0;
    const numbers = this.getNumbersFromString(inputString, delimiters);
    numbers.forEach((number) => {
      result += number;
    })

    Console.print(`결과 : ${result}`);
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

  /** 문자열에서 숫자 추출 */
  getNumbersFromString(inputString, delimiters) {
    const numbers = []; 
    inputString.split('').forEach((str) => {
      if (!delimiters.includes(str)) {
        numbers.push(parseInt(str));
      }
    })
    return numbers;
  }
  
}

export default App;
