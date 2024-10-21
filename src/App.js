import { Console } from '@woowacourse/mission-utils';
import { VALIDATION_DEFAULT, VALIDATION_CUSTOM } from './constants.js';
import InputValidator from './InputValidator.js';

class App {
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
    const validator = new InputValidator(input);
    const validationResult = validator.validateInput();

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