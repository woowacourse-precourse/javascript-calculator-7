import View from "./View.js";
import Separator from "./Separate.js";
import Validate from "./Validate.js";
import Calculate from "./calculate.js";

class App {
  constructor() {}

  async run() {
    const view = new View();
    const separator = new Separator();
    const validate = new Validate();
    const calculate = new Calculate();

    const userInput = await view.inputPrompt();

    const customSeparator = separator.isCustomSeparator(userInput);
    const inputArr = separator.userValueArr(userInput, customSeparator);

    const verifiedArr = validate.validateValue(inputArr);
    const result = calculate.sum(verifiedArr);

    view.outputView(result);
  }
}

export default App;
