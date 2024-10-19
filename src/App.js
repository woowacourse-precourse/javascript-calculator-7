import CalculatorController from "./controller.js";
import CalculatorModel from "./model.js";
import CalculatorView from "./view.js";

class App {
  #controller;

  constructor() {
    this.#controller = new CalculatorController(
      new CalculatorModel(),
      new CalculatorView()
    );
  }

  async run() {
    await this.#controller.processCalculation();
  }
}

export default App;
