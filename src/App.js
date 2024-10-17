import { InputHandler } from "./handler/InputHandler.js";
import { CustomOperatorExtractor } from "./CustomOperatorExtractor.js";
import { DEFAULT_OPERATOR, END_CUSTOM_OPERATOR } from "./constants/Constants.js";
import { Calculator } from "./Calculator.js";

class App {
  #inputHandler;
  #customOperatorExtractor;
  #isCustomCalculate;
  #calculate;

  async run() {
    this.#inputHandler = new InputHandler();
    this.#customOperatorExtractor = new CustomOperatorExtractor();
    const input = await this.#inputHandler.getInput();
    const customOperator = this.#customOperatorExtractor.extractCustomStartOperator(input)
    this.#isCustomCalculate = customOperator !== '';
    const operatorList = this.#isCustomCalculate ? [customOperator] : DEFAULT_OPERATOR;
    const expression = this.#isCustomCalculate ? input.slice(input.indexOf(END_CUSTOM_OPERATOR) + END_CUSTOM_OPERATOR.length) : input;
    this.#calculate = new Calculator();
    this.#calculate.calculate(operatorList, expression);
  }
}

export default App;
