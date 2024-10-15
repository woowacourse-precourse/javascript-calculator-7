import Calculator from "./calculator.js";
import Input from "./input.js";

class App {
  constructor() {
    this.inputHandler = new Input();
  }

  async run() {
    const input = await this.inputHandler.getUserInput();
    const calculator = new Calculator(input);
    calculator.calculate();
  }
}

export default App;
