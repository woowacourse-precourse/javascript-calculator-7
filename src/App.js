import { Calculator } from "./Calculator.js";
import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";

class App {
  async run() {
    const USER_INPUT = await InputView.string();
    const calculator = new Calculator(USER_INPUT);
    OutputView.sum(calculator.add());
  }
}
export default App;
