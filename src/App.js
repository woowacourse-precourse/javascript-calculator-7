import { CalculatorController as controller } from "./controller.js";
import CalculatorModel, { CalculatorModel as model } from "./model.js";
import { CalculatorView as view } from "./view.js";

class App {
  #controller;

  constructor() {
    this.#controller = new controller(new model(), new view());
  }
  async run() {
    await this.#controller.handleCalculate();
  }
}

export default App;
