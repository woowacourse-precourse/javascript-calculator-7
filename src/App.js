import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 입력 기능
      const input = await MissionUtils.Console.readLineAsync(
        '덧셈할 문자열을 입력해주세요.\n'
      );

      const result = this.getDelimiters(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  // 쉼표, 콜론, 커스텀 구분자로 문자열을 분리하는 함수
  getDelimiters(str) {
    // 공백 문자열 처리
    if (str.trim() === '') return 0;

    // 기본 구분자
    let delimiter = /,|:/;

    // 기본 구분자 처리
    if (str.match(delimiter)) {
      return this.sumNumbers(str.split(delimiter));
    }

    // 커스텀 구분자 처리
    if (str.startsWith('//')) {
      str = str.replace('\\n', '\n');
      const [customDelimiter, rest] = str.split('\n');
      delimiter = customDelimiter[2];
      return this.sumNumbers(rest.split(delimiter));
    }

    //유효하지 않은 구분자 처리
    throw new Error('[ERROR] 유효하지 않은 구분자가 포함되어 있습니다.');
  }

  // 구분자로 분리된 문자열을 숫자로 변환하여 더하는 함수
  sumNumbers(stringNumbers) {
    return stringNumbers.reduce((acc, num) => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error('[ERROR] 유효하지 않은 숫자가 포함되어 있습니다.');
      }
      return acc + parsed;
    }, 0);
  }
}

export default App;
