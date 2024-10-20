import Calculator from './calculator.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.calculator = new Calculator();
  }

  async run() {
    const input = await Console.readLineAsync(
      `덧셈할 문자열을 입력해 주세요.\n`
    );

    try {
      const result = this.calculator.add(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
