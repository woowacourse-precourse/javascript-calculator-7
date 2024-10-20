import { Console } from '@woowacourse/mission-utils';
import Calculator from './calculator.js';
import Input from './input.js';
import { PROMT_MESSAGE } from './constants/message.js';

class App {
  constructor() {
    this.inputHandler = new Input();
  }

  async run() {
    const input = await this.inputHandler.getUserInput();
    const calculator = new Calculator(input);
    const result = calculator.calculate();
    Console.print(`${PROMT_MESSAGE.result} ${result}`);
  }
}

export default App;
