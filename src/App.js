import { Console } from '@woowacourse/mission-utils';

const DEFAULT_DELIMITER_REGEX = /,|:/;
const CUSTOM_DELIMITER_REGEX = /^\/\/([\s\S]*?)\\n/;

const SPACE_REGEX = /\s/;
const REGEX_META_CHARACTERS = /[-\/\\^$*+?.()|[\]{}]/g;

class App {
  async run() {
    try {
      const inputValue = await this.getInputValue();

      if (!inputValue) {
        Console.print(`결과 : 0`);
        return;
      }

      let operands = [];

      if (CUSTOM_DELIMITER_REGEX.test(inputValue)) {
        const [matchedString, customDelimiter] = inputValue.match(CUSTOM_DELIMITER_REGEX);

        if (!customDelimiter || SPACE_REGEX.test(customDelimiter)) {
          throw new Error('[ERROR] 커스텀 구분자가 입력되지 않았습니다.');
        }

        if (customDelimiter.length < 1) {
          throw new Error('[ERROR] 커스텀 구분자는 1글자 이상 가능합니다.');
        }

        if (!isNaN(Number(customDelimiter))) {
          throw new Error('[ERROR] 커스텀 구분자로 숫자를 사용할 수 없습니다.');
        }

        const parsedString = inputValue.replace(matchedString, '');

        if (!parsedString) {
          throw new Error('[ERROR] 유효한 피연산자가 없습니다.');
        }

        operands = this.parseInputValueToOperandsByDelimiter(
          parsedString,
          new RegExp(customDelimiter.replace(REGEX_META_CHARACTERS, '\\$&'))
        );
      } else {
        operands = this.parseInputValueToOperandsByDelimiter(inputValue, DEFAULT_DELIMITER_REGEX);
      }

      const result = this.getSum(operands);
      Console.print(`결과 : ${result}`);
    } catch (err) {
      // Console.print(err);
      throw err;
    }
  }

  async getInputValue() {
    const inputValue = (await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')).trim();

    if (inputValue.includes(' ')) {
      throw new Error('[ERROR] 띄어쓰기는 허용되지 않습니다.');
    }

    return inputValue;
  }

  parseInputValueToOperandsByDelimiter(value, delimiterRegex) {
    const operands = value.split(delimiterRegex).map(Number);

    if (operands.some((operand) => isNaN(operand))) {
      throw new Error('[ERROR] 숫자가 아닌 피연산자가 포함되어 있습니다.');
    }

    if (operands.some((operand) => operand < 0)) {
      throw new Error('[ERROR] 음수 피연산자는 허용되지 않습니다.');
    }

    return operands;
  }

  getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default App;
