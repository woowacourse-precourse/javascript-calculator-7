import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';

class App {
  async run() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.');

    const CALC = new Calculator();
    CALC.setInput(input)
      .computeSum();

    // TODO: Print the result of the calculation
  }
}

export default App;
