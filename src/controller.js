import { Console } from "@woowacourse/mission-utils";

class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async handleCalculate() {
    try {
      const RESULT = this.model.calculate(Console.readLineAsync);
      this.view.outputView(RESULT);
    } catch (error) {
      this.view.errorView(error);
    }
  }
}

export default CalculatorController;
