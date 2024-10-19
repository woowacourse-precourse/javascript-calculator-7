import { Console } from '@woowacourse/mission-utils';

const DEFAULT_DELIMITER_REGEX = /,|:/;

class App {
  async run() {
    try {
      const inputValue = await this.getInputValue();
      const parsedNumbers = this.parseInputValueToNumbersByDelimiter(
        inputValue,
        DEFAULT_DELIMITER_REGEX
      );

      const result = this.getSum(parsedNumbers);
      Console.print(`결과 : ${result}`);
    } catch (err) {
      Console.print(err.message);
    }
  }

  async getInputValue() {
    const inputValue = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if (!inputValue) {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    return inputValue;
  }

  parseInputValueToNumbersByDelimiter(inputValue, delimiterRegex) {
    return inputValue.split(delimiterRegex).map(Number);
  }

  getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default App;
