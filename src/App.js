import { Console } from '@woowacourse/mission-utils';
import { DEFAULT_SEPARATOR, VALIDATION_DEFAULT, VALIDATION_CUSTOM, ERROR_MESSAGE } from './constants.js';

class App {
  validateInput(input) {
    if (this.isDefault(input)) {
      return VALIDATION_DEFAULT;
    } else if (this.isCustom(input)) {
      return VALIDATION_CUSTOM;
    }

    throw new Error(ERROR_MESSAGE);
  }

  isDefault(input) {
    const invalidInput = /[^0-9,:.]/;

    if (!invalidInput.test(input)) {
      this.validateDefaultFormat(input);
      return true;
    }
    return false;
  }

  isCustom(input) {
    const customSep = /^\/\/\D\\n/;

    if (customSep.test(input)) {
      this.validateCustomFormat(input);

      if (input[2] !== '\\') {
        const pattern = new RegExp(`[^0-9,:.${input[2]}]`);
        if (pattern.test(input.slice(5)) || this.hasConsecutiveSeparators(input.slice(5), input[2])) {
          throw new Error(ERROR_MESSAGE);
        }
      } else {
        const pattern = new RegExp(/[^0-9,:.\\]/);
        if (pattern.test(input.slice(5)) || this.hasConsecutiveSeparators(input.slice(5), '\\\\')) {
          throw new Error(ERROR_MESSAGE);
        }
      }
      return true;
    }
    return false;
  }

  startsAndEndsWithNumber(input) {
    if (isNaN(input[0]) || isNaN(input[input.length - 1])) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  hasConsecutiveSeparators(input, sep) {
    const pattern = new RegExp(`[${sep}]{2,}`);
    if (pattern.test(input)) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  hasConsecutiveDecimalPoints(input) {
    const pattern = new RegExp(/[.]{2,}/);
    if (pattern.test(input)) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  isCustomSeparatorDot(input) {
    if (input[2] === '.') {
      throw new Error(ERROR_MESSAGE);
    }
  }

  validateDefaultFormat(input) {
    if (input.length === 0) {
      return;
    }

    this.startsAndEndsWithNumber(input);
    this.hasConsecutiveSeparators(input, DEFAULT_SEPARATOR);
    this.hasConsecutiveDecimalPoints(input);
  }

  validateCustomFormat(input) {
    if (input.length === 5) {
      return;
    }

    this.startsAndEndsWithNumber(input.slice(5));
    this.hasConsecutiveSeparators(input.slice(5), DEFAULT_SEPARATOR);
    this.hasConsecutiveDecimalPoints(input.slice(5));
    this.isCustomSeparatorDot(input);
  }

  convertToNumberArray(input, sep) {
    return input.split(sep).map(Number);
  }

  calculateSum(arr) {
    let sum = 0;
    arr.forEach((num) => {
      sum += num;
    });
    return sum;
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const validationResult = this.validateInput(input);

    let sum = 0;
    if (validationResult === VALIDATION_DEFAULT) {
      const numArr = this.convertToNumberArray(input, new RegExp(/[,:]/));
      sum = this.calculateSum(numArr);
    } else if (validationResult === VALIDATION_CUSTOM) {
      if (input[2] !== '\\') {
        const numArr = this.convertToNumberArray(input.slice(5), new RegExp(`[,:${input[2]}]`));
        sum = this.calculateSum(numArr);
      } else {
        const numArr = this.convertToNumberArray(input.slice(5), new RegExp(/[,:\\]/));
        sum = this.calculateSum(numArr);
      }
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;