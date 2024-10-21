import { Console } from '@woowacourse/mission-utils';
import InputValidator from './InputValidator.js';
import Calculator from './Calculator.js';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const validator = new InputValidator(input);
    const validationResult = validator.validateInput();
    const calculator = new Calculator(input, validationResult);
    const sum = calculator.calculate();

    Console.print(`결과 : ${sum}`);
  }
}

export default App;