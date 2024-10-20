import { Console } from '@woowacourse/mission-utils';
import CalculatorController from './controller/CalculatorController.js';
import { EMPTY_INPUT_SUM } from './constants/constants.js';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );
      const result =
        input.trim() === ''
          ? EMPTY_INPUT_SUM
          : await CalculatorController.processInput(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
