import { Console } from '@woowacourse/mission-utils';
import CalculatorController from './controller/CalculatorController.js';
import StringCalculator from './model/StringCalculator.js';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );
      const result =
        input.trim() === ''
          ? 0
          : await CalculatorController.processInput(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
