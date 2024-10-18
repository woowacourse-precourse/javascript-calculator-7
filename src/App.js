import {Console} from '@woowacourse/mission-utils'
import { Calculator } from './Calculator.js';
class App {

  constructor() {
    this.calculator = new Calculator();
  }

  async run() {
    const input = await Console.readLineAsync("Input: ")
    const value = this.calculator.calculate(input)
    Console.print(value)
  }
}

export default App;
