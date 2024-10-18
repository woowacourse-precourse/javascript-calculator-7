import { Calculator } from "./Calculator.js";
import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";

class App {
  async run() {
    try {
      const USER_INPUT = await InputView.string();
      const calculator = new Calculator(USER_INPUT);
      OutputView.sum(calculator.add());
    } catch (error) {
      OutputView.error(error.message);
    }
  }
}
export default App;
