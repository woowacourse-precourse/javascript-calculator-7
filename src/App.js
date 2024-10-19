import { Console } from '@woowacourse/mission-utils';

const DEFAULT_DELIMITER_REGEX = /,|:/;
const CUSTOM_DELIMITER_REGEX = /^\/\/(.+?)\\n/;

class App {
  async run() {
    try {
      const inputValue = await this.getInputValue();

      let operands = [];

      if (CUSTOM_DELIMITER_REGEX.test(inputValue)) {
        const [matchedString, customDelimiter] = inputValue.match(CUSTOM_DELIMITER_REGEX);
        const parsedString = inputValue.replace(matchedString, '');
        operands = this.parseInputValueToOperandsByDelimiter(parsedString, customDelimiter);
      } else {
        operands = this.parseInputValueToOperandsByDelimiter(inputValue, DEFAULT_DELIMITER_REGEX);
      }

      const result = this.getSum(operands);
      Console.print(`결과 : ${result}`);
    } catch (err) {
      Console.print(err);
    }
  }

  async getInputValue() {
    const inputValue = (await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')).trim();

    if (!inputValue) {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    if (inputValue.includes(' ')) {
      throw new Error('[ERROR] 띄어쓰기는 허용되지 않습니다.');
    }

    return inputValue;
  }

  parseInputValueToOperandsByDelimiter(value, delimiterRegex) {
    if (!delimiterRegex.test(value)) {
      throw new Error('[ERROR] 입력값에 유효한 구분자가 없습니다.');
    }

    return value.split(delimiterRegex).map(Number);
  }

  getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default App;
