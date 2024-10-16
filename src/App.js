import StringCalculator from "./StringCalculator.js";
import InputHandler from "./InputHandler.js";

class App {
  constructor() {
    this.calculator = new StringCalculator();
    this.inputHandler = new InputHandler();
  }

  async run() {
    try {
      const input = await this.inputHandler.getInput();
      const result = this.calculator.calculate(input);
      this.inputHandler.printResult(result);
    } catch (error) {
      this.inputHandler.printError(error);
    }
  }
}

export default App;
