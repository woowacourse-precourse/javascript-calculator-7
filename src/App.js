import { Console } from '@woowacourse/mission-utils';

class App {
  SEPARATORS = [',', ':'];
  EXTRACTED_NUMBERS = [];

  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해주세요.\n'
      );

      const processedInput = this.handleCustomSeparator(input);

      if (this.isEmpty(processedInput)) {
        this.printResult(0);
      } else {
        this.splitAndExtractNumbers(processedInput);
        const sum = this.calculateSum();
        this.printResult(sum);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  isEmpty(str) {
    return str.trim().length === 0;
  }

  handleCustomSeparator(input) {
    const CUSTOM_SEPARATOR_REGEX = /^\/\/(.|\s)\\n(.*)$/;
    let remainingString = input;
    let match;

    while ((match = remainingString.match(CUSTOM_SEPARATOR_REGEX))) {
      const customSeparator = match[1];
      remainingString = match[2];

      if (customSeparator !== ' ' && !isNaN(customSeparator)) {
        throw new Error('커스텀 구분자로 숫자를 사용할 수 없습니다');
      }

      if (!this.SEPARATORS.includes(customSeparator)) {
        this.SEPARATORS.push(customSeparator);
      }
    }

    return remainingString;
  }

  validateNumber(num) {
    if (isNaN(num)) {
      throw new Error('숫자가 아닌 문자를 입력하셨습니다');
    }

    if (num <= 0) {
      throw new Error('양수를 입력해주세요');
    }

    if (num > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        `입력된 숫자가 너무 큽니다. ${Number.MAX_SAFE_INTEGER.toLocaleString()} 이하의 숫자를 입력해주세요.`
      );
    }

    return true;
  }

  splitAndExtractNumbers(input) {
    const REGEX = new RegExp(`[${this.SEPARATORS.join('')}]`, 'g');
    const numbers = input.split(REGEX);

    if (numbers.some((num) => num.trim() === '')) {
      throw new Error('구분자 사이에 빈 문자열이 있습니다');
    }

    for (const num of numbers) {
      if (this.validateNumber(num)) {
        this.EXTRACTED_NUMBERS.push(Number(num));
      }
    }
  }

  calculateSum() {
    return this.EXTRACTED_NUMBERS.reduce((sum, num) => {
      if (sum > Number.MAX_SAFE_INTEGER - num) {
        throw new Error(
          `계산 결과가 너무 큽니다. 합계는 ${Number.MAX_SAFE_INTEGER.toLocaleString()} 이하여야 합니다.`
        );
      }
      return sum + num;
    }, 0);
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }

  handleError(error) {
    throw new Error(`[ERROR] ${error.message}`);
  }
}

export default App;
