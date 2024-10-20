import View from "./View.js";
import Separator from "./Separator.js";
import Validator from "./Validator.js";
import Calculator from "./Calculator.js";

class App {
  constructor() {
    this.view = new View();
    this.separator = new Separator();
    this.validator = new Validator();
    this.calculator = new Calculator();
  }

  async run() {
    const userInput = await this.view.inputPrompt();

    const customSeparator = this.separator.isCustomSeparator(userInput);
    const inputArr = this.separator.userValueArr(userInput, customSeparator);

    const verifiedArr = this.validator.validateValue(inputArr);
    const result = this.calculator.sum(verifiedArr);

    this.view.outputView(result);
  }
}

export default App;
