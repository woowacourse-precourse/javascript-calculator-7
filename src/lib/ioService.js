import { Console } from '@woowacourse/mission-utils';
import Calculator from '../Calculator.js';
import Validator from '../Validator.js';

export async function inputService() {
  while (true) {
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
    }
  }
}
