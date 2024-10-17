import { InputHandler } from "./handler/InputHandler.js";
import { CustomOperatorExtractor } from "./CustomOperatorExtractor.js";
import { DEFAULT_OPERATOR, END_CUSTOM_OPERATOR } from "./constants/Constants.js";

class App {
  #inputHandler;
  #customOperatorExtractor;
  #isCustomCalculate;

  async run() {
    this.#inputHandler = new InputHandler();
    this.#customOperatorExtractor = new CustomOperatorExtractor();
    const input = await this.#inputHandler.getInput();
    const customOperator = this.#customOperatorExtractor.extractCustomStartOperator(input)
    this.#isCustomCalculate = customOperator !== '';
    const operatorList = this.#isCustomCalculate ? DEFAULT_OPERATOR : [customOperator];
    const expression = this.#isCustomCalculate ? input.slice(input.indexOf(END_CUSTOM_OPERATOR) + END_CUSTOM_OPERATOR.length) : input;
  }
}

export default App;
