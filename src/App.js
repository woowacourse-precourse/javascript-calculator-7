import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGE } from "./constants.js";

class App {
  async run() {
    await this.enter();
    this.calculateResult();
  }

  async enter() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_START);
    this.input = await Console.readLineAsync("");
  }

  calculateResult() {
    const numbers = this.input.split(/,|:/).map((number) => parseInt(number));
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_RESULT + sum);
  }
}

export default App;
