import View from "./View.js";
import Separator from "./Separate.js";
import Validate from "./Validate.js";
import Calculate from "./calculate.js";

class App {
  constructor() {
    this.view = new View();
    this.separator = new Separator();
    this.validate = new Validate();
    this.calculate = new Calculate();
  }

  async run() {
    const userInput = await this.view.inputPrompt();

    const customSeparator = this.separator.isCustomSeparator(userInput);
    const inputArr = this.separator.userValueArr(userInput, customSeparator);

    const verifiedArr = this.validate.validateValue(inputArr);
    const result = this.calculate.sum(verifiedArr);

    this.view.outputView(result);
  }
}

export default App;
