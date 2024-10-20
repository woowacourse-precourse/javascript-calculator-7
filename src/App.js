import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import { OUTPUT_MESSSAGE } from './constants/message.js';
import Calculator from './Calculator.js';

class App {
  constructor() {
    this.inputHandler = new Input();
  }

  async run() {
    try {
      const input = await this.inputHandler.getInput();

      const calculator = new Calculator(input);
      const sum = calculator.calculate();
      Console.print(`${OUTPUT_MESSSAGE} ${sum}`);
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;