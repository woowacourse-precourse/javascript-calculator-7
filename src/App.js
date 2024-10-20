import { Console } from '@woowacourse/mission-utils';
import { VALIDATION_DEFAULT, VALIDATION_CUSTOM, VALIDATION_ERROR } from './constants.js';

class App {
  validateInput(input) {
    const sep = /[^0-9,:]/;
    const customSep = /^\/\/\D\\n/;

    if (!sep.test(input)) {
      return VALIDATION_DEFAULT;
    } else if (customSep.test(input)) {
      const pattern = new RegExp(`[^0-9,:${input[2]}]`);
      if (!pattern.test(input.slice(5))) {
        return VALIDATION_CUSTOM;
      }
    }

    return VALIDATION_ERROR;
  }

  convertToNumberArray(input, sep) {
    return input.split(sep).map(Number);
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const validationResult = this.validateInput(input);

    let sum = 0;
    if (validationResult === VALIDATION_DEFAULT) {
      const numArr = this.convertToNumberArray(input, /[,:]/);
      numArr.forEach((num) => {
        sum += num;
      });
    } else if (validationResult === VALIDATION_CUSTOM) {
      const numArr = this.convertToNumberArray(input.slice(5), input[2]);
      numArr.forEach((num) => {
        sum += num;
      });
    } else {
      throw new Error('[ERROR]: 잘못된 값을 입력했습니다');
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;