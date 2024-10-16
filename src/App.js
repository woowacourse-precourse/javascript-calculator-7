import InterfaceUtil from "./InterfaceUtil.js";
import CalculateUtil from "./CalculateUtil.js";
import { isInputValid } from "./validation.js";

class App {
  async run() {
    const input = await InterfaceUtil.inputString();

    const { separator, expression } = CalculateUtil.parseInput(input);
    if (!isInputValid(separator, expression)) throw new Error("[ERROR]");
  }
}

export default App;
