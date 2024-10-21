import { getInput } from './views/InputView.js';
import { printResult } from './views/OutputView.js';
import { Calculator } from './models/Calculator.js';
import { Console } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.calculator = new Calculator();
  }

  async run() {
    try {
      const input = await getInput();
      const result = this.calculator.calculate(input);
      printResult(result);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}
