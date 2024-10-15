import Calculator from "./calculator.js";
import Input from "./input.js";

class App {
  constructor() {
    this.userInput = new Input();
  }

  async run() {
    const input = await this.userInput.getUserInput();
    const calculator = new Calculator(input);
    calculator.calculate();
  }
}

export default App;
