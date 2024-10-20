import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 사용자로부터 문자열 입력받기
      let input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );

      let numbers = this.parseInput(input);

      let sum = this.sumNumbers(numbers);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  // 문자열 파싱
  parseInput(input) {
    let delimiter = /,|:/; // 정규식을 사용하여 구분자 여러개 설정

    if (input.startsWith('//') && input.includes('\\n')) {
      let customDelimiter = input.slice(2, 3);
      let string = input.slice(5);

      if (!isNaN(customDelimiter)) {
        throw new Error('[ERROR] 숫자를 구분자로 사용할 수 없습니다.');
      }
      let numbers = string.split(customDelimiter);
      return numbers;
    } else {
      return input.split(delimiter).map((num) => parseInt(num));
    }
  }

  // 숫자의 합 계산
  sumNumbers(numbers) {
    if (numbers.some((n) => n <= 0)) {
      throw new Error('[ERROR] 양수로 구성된 문자열을 입력해주세요.');
    }
    return numbers.reduce((acc, num) => acc + parseInt(num), 0);
  }
}

export default App;
