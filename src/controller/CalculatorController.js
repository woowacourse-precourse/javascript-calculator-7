import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Calculator from "../domain/Calculator.js";

class CalculatorController {
  async start() {
    try {
      const input = await InputView.readString();
      const calculator = new Calculator();
      const result = calculator.calculate(input);
      OutputView.printResult(result);
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
}

export default CalculatorController;
