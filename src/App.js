import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  static DEFAULT_DELIMITERS = /,|:/;
  static CUSTOM_DELIMITER_PATTERN = /^\/\/(.*?)\\n/;
  static ERROR_MESSAGES = {
    INVALID_DELIMITER: '[ERROR] 유효하지 않은 구분자가 포함되어 있습니다.',
    INVALID_NUMBER: '[ERROR] 유효하지 않은 숫자가 포함되어 있습니다.',
  };

  async run() {
    try {
      const input = await this.getUserInput();
      const result = this.getDelimiters(input);
      this.printResult(result);
    } catch (error) {
      this.printError(error);
    }
  }

  async getUserInput() {
    return await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );
  }

  // 쉼표, 콜론, 커스텀 구분자로 문자열을 분리하는 함수
  getDelimiters(str) {
    // 공백 문자열 처리
    if (str.trim() === '') return 0;

    // 기본 구분자 처리
    if (str.match(App.DEFAULT_DELIMITERS)) {
      return this.sumNumbers(str.split(App.DEFAULT_DELIMITERS));
    }

    // 커스텀 구분자 처리
    const customDelimiterMatch = str.match(App.CUSTOM_DELIMITER_PATTERN);
    // 커스텀 구분자가 존재하는지 확인
    if (customDelimiterMatch) {
      const customDelimiter = customDelimiterMatch[1];
      const numbersPart = str.slice(customDelimiterMatch[0].length);
      return this.sumNumbers(numbersPart.split(customDelimiter));
    }

    //유효하지 않은 구분자 처리
    throw new Error(App.ERROR_MESSAGES.INVALID_DELIMITER);
  }

  // 구분자로 분리된 문자열을 숫자로 변환하여 더하는 함수
  sumNumbers(stringNumbers) {
    return stringNumbers.reduce((acc, num) => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error(App.ERROR_MESSAGES.INVALID_NUMBER);
      }
      return acc + parsed;
    }, 0);
  }

  printResult(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  printError(error) {
    MissionUtils.Console.print(error.message);
  }
}

export default App;
