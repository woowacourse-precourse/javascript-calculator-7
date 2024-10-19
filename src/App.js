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

    // 구분자 배열에 포함되지 않은 문자 -> 숫자로 변환
    inputString.split('').forEach((str) => {
      // [ERROR] 음수 처리
      if (str === '-' && !delimiters.includes('-')) {
        throw new Error('[ERROR] 구분자와 양수로 이뤄진 문자열을 작성해주세요.');
      }

      // 두 자리 이상의 정수를 처리하기 위해 문자열의 합으로 처리
      if (!delimiters.includes(str)) {
        // [ERROR] 구분자가 아닌 문자, 숫자도 아닌 경우
        if (!parseInt(str) && parseInt(str) !== 0) { // 0이 falsy값인걸 잊지말자 ㄱ-
          throw new Error('[ERROR] 기본 구분자와 커스텀 구분자만 사용해주세요.');
        }
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
