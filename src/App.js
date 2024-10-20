import { Console } from '@woowacourse/mission-utils';
import Calculator from './calculator.js';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n',);
    Console.print(input);
    try {
      const calculator = new Calculator(input);
      const result = calculator.calculate();
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
