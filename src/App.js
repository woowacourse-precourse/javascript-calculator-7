import { Console } from '@woowacourse/mission-utils';
import CalculatorController from './controller/CalculatorController.js';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
    const result =
      input.trim() === '' ? 0 : await CalculatorController.processInput(input);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
