import Calculator from "./Model/Calculator.js";
import InputParser from "./Model/InputParser.js";
import ConsoleView from "./View/ConsoleView.js";
import CalculatorController from "./Controller/CalculatorController.js";

class App {
  constructor() {
    const calculator = new Calculator();
    const inputParser = new InputParser();
    const view = new ConsoleView();
    this.controller = new CalculatorController(calculator, inputParser, view);
  }

  async run() {
    await this.controller.run();
  }
}

export default App;
