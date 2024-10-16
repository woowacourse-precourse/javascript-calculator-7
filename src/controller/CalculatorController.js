import InputView from "../view/inputView.js";
import OutputView from "../view/outputView.js";

class CalculatorController {
  async start() {
    const inputValue = await InputView.readStringInput();
    OutputView.printResultValue(inputValue);
  }
}

export default CalculatorController;