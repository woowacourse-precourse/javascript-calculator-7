import { Console } from '@woowacourse/mission-utils';

class App {
  separators = [',', ':'];
  extractedNumbers = [];

  async run() {
    const INPUT = await Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );

    const PROCESSED_INPUT = this.handleCustomSeparator(INPUT);

    if (this.isEmpty(PROCESSED_INPUT)) {
      this.printResult(0);
    } else {
      try {
        this.splitAndExtractNumbers(PROCESSED_INPUT);
        Console.print(`추출된 숫자들: ${this.extractedNumbers.join(', ')}`);
      } catch (error) {
        this.printError(error.message);
      }
    }
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

  splitAndExtractNumbers(input) {
    const REGEX = new RegExp(`[${this.separators.join('')}]`, 'g');
    const NUMBERS = input.split(REGEX);

    if (NUMBERS.some((num) => num.trim() === '')) {
      throw new Error('구분자 사이에 빈 문자열이 있습니다');
    }

    for (const NUM of NUMBERS) {
      if (!this.validateNumber(NUM)) {
        throw new Error(`숫자가 아닌 문자를 입력하셨습니다`);
      }
      this.extractedNumbers.push(Number(NUM));
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
