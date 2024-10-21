import { Console } from "@woowacourse/mission-utils";
import Calculator from "./domain/Calulator.js";
import input from "./view/input.js";
import output from "./view/output.js";

class App {
  async run() {
    try {
      const inputString = await input.getStringToPlus();
      const calculator = new Calculator(inputString);
      const result = calculator.calculate();
      output.result(result);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
