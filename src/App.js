import {Console} from '@woowacourse/mission-utils'
import { Calculator } from './Calculator.js';
class App {
  async run() {
    const input = await Console.readLineAsync("Input: ")
    const value = Calculator.calculate(input)
    Console.print(value)
  }
}

export default App;
