import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  
    let delimiters = [',', ':'];
    let inputString = input;

    // 커스텀 구분자 처리
    if (this.isCustom(input)) {
      const [customDelimiter, newInputString] = this.splitCustom(input);
      delimiters.push(customDelimiter);
      inputString = newInputString;
    }

    // 숫자 추출 및 합
    let result = 0;
    const numbers = this.getNumbersFromString(inputString, delimiters);
    numbers.forEach((number) => {
      result += number;
    })

    // 출력
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
    let numStr = '';

    inputString.split('').forEach((str) => {
      // 구분자 배열에 포함되지 않은 문자 -> 숫자로 변환
      if (!delimiters.includes(str)) {
        numStr += str;
      } else {
        numbers.push(parseInt(numStr));
        numStr = '';
      }
    })
    numbers.push(parseInt(numStr));
    return numbers;
  }
  
}

export default App;
