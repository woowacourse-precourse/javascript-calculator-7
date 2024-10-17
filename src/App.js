import { Calculator } from "./Calculator.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const calculator = new Calculator("//?\n?1:,2,3,24,5");
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}
export default App;
