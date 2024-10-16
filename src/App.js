import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGE } from "./constants.js";

class App {
  async run() {
    this.enter();
  }

  async enter() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_START);
    this.input = await Console.readLineAsync("");
    Console.print(this.input);
  }
}

export default App;
