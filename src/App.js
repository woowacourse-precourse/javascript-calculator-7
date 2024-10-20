import { errorMessages } from './constant.js';
import Calculator from './Calculator.js';
import Validator from './Validator.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

      if (!input) {
        Console.print('결과 : 0');
        return;
      }

      const calculator = new Calculator(input);
      const validator = new Validator();

      if (validator.valid(input)) {
        Console.print(`결과 : ${calculator.add(input)}`);
        return;
      } else {
        throw Error(errorMessages.unexpectedError);
      }
    } catch (e) {
      throw Error(errorMessages.unexpectedError);
    }
  }
}

export default App;
