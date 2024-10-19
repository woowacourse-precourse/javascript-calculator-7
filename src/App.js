import { Console } from '@woowacourse/mission-utils';
import getInput from './functions/get-input.js';
import Calculator from './calculator.js';

class App {
  async run() {
    const input = await getInput();
    const calculator = new Calculator();
    const result = calculator.calculate(input);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
