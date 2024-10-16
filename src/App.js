import InterfaceUtil from "./InterfaceUtil.js";
import CalculateUtil from "./CalculateUtil.js";
import { isInputValid } from "./validation.js";
import MESSAGES from "./messages.js";

class App {
  async run() {
    const input = await InterfaceUtil.inputString();

    const { separator, expression } = CalculateUtil.parseInput(input);
    if (!isInputValid(separator, expression)) throw new Error(MESSAGES.ERROR);

    const sum = CalculateUtil.sumExpression(separator, expression);

    InterfaceUtil.printResult(sum);
  }
}

export default App;
