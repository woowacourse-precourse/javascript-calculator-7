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
    const inputValue = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if (!inputValue) {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    return inputValue;
  }

  parseInputValueToOperandsByDelimiter(value, delimiterRegex) {
    return value.split(delimiterRegex).map(Number);
  }

  getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default App;
