import { Console } from '@woowacourse/mission-utils';

class App {
  validateInputFormat(inputString) {
    const validatePatterns = {
      containsSpecialCharater: /[,;/\n]/g,
      isEmpty: /^$/,
    };
    return (
      inputString.match(validatePatterns.containsSpecialCharater) ||
      inputString.match(validatePatterns.isEmpty)
    );
  }

  extractCustomDelimiter(inputString) {
    const customPattern = /[^//]/;
    const customDelimiter = inputString.match(customPattern)[0];
    return new RegExp(`[\\\\/\\sA-Za-z${customDelimiter}]`, 'g');
  }

  getDelimiter(inputString) {
    const hasCustomDelimiter = inputString.match(/^\/\//);
    const delimiter = hasCustomDelimiter
      ? this.extractCustomDelimiter(inputString)
      : /[,:]/g;
    return delimiter;
  }

  isPositiveNumber(number) {
    return Math.sign(number);
  }

  calculateSumOfNumbers(numberArray) {
    let totalSum = 0;
    numberArray.forEach((number) => {
      if (this.isPositiveNumber(number) >= 0) {
        totalSum += Number(number);
      } else {
        throw new Error('양수가 아닙니다');
      }
    });

    return totalSum;
  }

  getParsedNumberArray(inputString) {
    if (!this.validateInputFormat(inputString)) {
      throw new Error('구분자를 입력하세요');
    }
    const delimiter = this.getDelimiter(inputString);
    return inputString.split(delimiter);
  }

  async run() {
    const PROMPT_MESSAGE = '덧셈할 문자열을 입력해주세요. ex)1,2:3 ';

    const userInput = await Console.readLineAsync(PROMPT_MESSAGE);

    try {
      const parsedNumbers = this.getParsedNumberArray(userInput);
      const answer = this.calculateSumOfNumbers(parsedNumbers);
      Console.print(`결과 : ${answer}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
