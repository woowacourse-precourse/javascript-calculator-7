import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.addNumbers(input);
      Console.print(`결과 : ${result}`);
  }
  addNumbers(input) {
      if (input.trim() === '') {
          return 0; // 빈 문자열인 경우 0 반환
      }

      let delimiters = [',', ':']; // 기본 구분자 배열

      // 커스텀 구분자 처리
      const customDelimiterRegex = /\/\/(.*?)\\n(.*)/;
      const customDelimiterMatch = input.match(customDelimiterRegex);
      if (customDelimiterMatch) {
          const customDelimiter = customDelimiterMatch[1];
          delimiters.push(customDelimiter);
          input = customDelimiterMatch[2];
      }

      const numbers = delimiters.reduce((acc, delimiter) => {
          return acc.flatMap(str => str.split(delimiter));
      }, [input]); // 구분자를 기준으로 문자열 분리

      // 모든 숫자가 양수인지 검증 및 숫자가 아닌 값 검증
      const invalidNumbers = numbers.filter(num => isNaN(parseInt(num)) || parseInt(num) < 0);
      if (invalidNumbers.length > 0) {
          throw new Error(`[ERROR] 유효하지 않은 값이 포함되어 있습니다: ${invalidNumbers.join(', ')}`);
      }

      // 숫자 합산
      const sum = numbers.reduce((total, num) => total + parseInt(num), 0);
      return sum;
  }
}

export default App;
