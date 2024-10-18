import { Calculator } from "./Calculator.js";
import { Console } from "@woowacourse/mission-utils";
import { InputView } from "./view/InputView.js";

class App {
  async run() {
    try {
      const USER_INPUT = await InputView.inputString();
      const calculator = new Calculator(USER_INPUT);
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}
export default App;
