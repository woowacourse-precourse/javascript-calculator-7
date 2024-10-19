import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";
import { Operand } from "./Operand.js";

class App {
  async run() {
    const USER_INPUT = await InputView.string();
    const operand = new Operand(USER_INPUT);
    OutputView.sum(operand.calculate());
  }
}
export default App;
