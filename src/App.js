import InterfaceUtil from "./InterfaceUtil.js";
import CalculateUtil from "./CalculateUtil.js";

class App {
  async run() {
    const input = await InterfaceUtil.inputString();

    const { separator, expression } = CalculateUtil.parseInput(input);
  }
}

export default App;
