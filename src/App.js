import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";
import { Operand } from "./Operand.js";

class App {
  async run() {
    const userInput = await InputView.string();
    const operand = new Operand(userInput);
    OutputView.sum(operand.calculate());
  }
}
export default App;
