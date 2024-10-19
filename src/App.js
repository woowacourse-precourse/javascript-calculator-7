import CALCULATOR_MESSAGE from '../src/constants/CalculatorMessage.js';
import { Console } from '@woowacourse/mission-utils';

class Io {
  async getString() {
    return await Console.readLineAsync(CALCULATOR_MESSAGE.start);
  }
  printResult(value) {
    return Console.print(CALCULATOR_MESSAGE.result + value);
  }
}

class App {
  constructor() {
    this.ioHandler = new Io();
  }
  async run() {
    let input = await this.ioHandler.getString();
  }
}

export default App;
