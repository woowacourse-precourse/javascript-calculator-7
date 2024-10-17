import { Console } from '@woowacourse/mission-utils';

class App {
  separators = [',', ':'];
  extractedNumbers = [];

  async run() {
    const INPUT = await Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );

    const PROCESSED_INPUT = this.handleCustomSeparator(INPUT);

    Console.print(`입력: ${PROCESSED_INPUT}`);
    Console.print(`현재 구분자 목록: ${this.separators.join('|')}`);

    let result;

    if (this.isEmpty(PROCESSED_INPUT)) {
      result = 0;
    } else if (PROCESSED_INPUT === 'error') {
      return this.printError("'error'를 입력했습니다");
    } else if (!this.validateNumber(PROCESSED_INPUT)) {
      return this.printError('숫자가 아닌 문자를 입력하셨습니다');
    } else {
      result = PROCESSED_INPUT;
    }

    this.printResult(result);
  }

  isEmpty(str) {
    return str.trim().length === 0;
  }

  handleCustomSeparator(input) {
    const CUSTOM_SEPARATOR_REGEX = /^\/\/(.)\\n(.*)$/;
    let remainingString = input;
    let match;

    while ((match = remainingString.match(CUSTOM_SEPARATOR_REGEX))) {
      const CUSTOM_SEPARATOR = match[1];
      remainingString = match[2];

      if (!this.separators.includes(CUSTOM_SEPARATOR)) {
        this.separators.push(CUSTOM_SEPARATOR);
      }
    }

    return remainingString;
  }

  validateNumber(num) {
    if (!isNaN(num)) {
      return true;
    } else {
      return false;
    }
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }

  printError(errorMessage) {
    Console.print(`[ERROR] : ${errorMessage}`);
    return;
  }
}

export default App;
