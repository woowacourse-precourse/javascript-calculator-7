import { Console } from '@woowacourse/mission-utils';
import { VALIDATION_DEFAULT, VALIDATION_CUSTOM, VALIDATION_ERROR } from './constants.js';

class App {
  validateInput(input) {
    const sep = /[^0-9,:]/;
    const customSep = /^\/\/\D\\n/;

    if (!sep.test(input)) {
      if (input.length !== 0 && !this.startsAndEndsWithNumber(input)) {
        return VALIDATION_ERROR;
      }
      if (this.hasConsecutiveSeparator(input, /,:/)) {
        return VALIDATION_ERROR;
      }
      return VALIDATION_DEFAULT;
    } else if (customSep.test(input)) {
      if (input.length > 5 && !this.startsAndEndsWithNumber(input.slice(5))) {
        return VALIDATION_ERROR;
      }
      if (this.hasConsecutiveSeparator(input.slice(5), /,:/)) {
        return VALIDATION_ERROR;
      }
      if (input[2] !== '\\') {
        const pattern = new RegExp(`[^0-9,:${input[2]}]`);
        if (pattern.test(input.slice(5)) || this.hasConsecutiveSeparator(input.slice(5), input[2])) {
          return VALIDATION_ERROR;
        }
      } else {
        const pattern = new RegExp(/[^0-9,:\\]/);
        if (pattern.test(input.slice(5)) || this.hasConsecutiveSeparator(input.slice(5), '\\\\')) {
          return VALIDATION_ERROR;
        }
      }
      return VALIDATION_CUSTOM;
    }
    return VALIDATION_ERROR;
  }

  startsAndEndsWithNumber(input) {
    if (isNaN(input[0]) || isNaN(input[input.length - 1])) {
      return false;
    }
    return true;
  }

  hasConsecutiveSeparator(input, sep) {
    const pattern = new RegExp(`[${sep}]{2,}`);
    return pattern.test(input);
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
      const numArr = this.convertToNumberArray(input, /[,:]/);
      sum = this.calculateSum(numArr);
    } else if (validationResult === VALIDATION_CUSTOM) {
      if (input[2] !== '\\') {
        const numArr = this.convertToNumberArray(input.slice(5), new RegExp(`[,:${input[2]}]`));
        sum = this.calculateSum(numArr);
      } else {
        const numArr = this.convertToNumberArray(input.slice(5), new RegExp(/[,:\\]/));
        sum = this.calculateSum(numArr);
      }
    } else {
      throw new Error('[ERROR]: 잘못된 값을 입력했습니다');
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;