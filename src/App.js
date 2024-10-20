import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';

class App {
  async run() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.');

    const CALC = new Calculator();
    const RESULT = CALC.setInput(INPUT)
      .computeSum()
      .getResult();

    Console.print(`결과 : ${RESULT}`);
  }
}

export default App;
