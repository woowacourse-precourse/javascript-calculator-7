import { CustomOperatorExtractor } from "./CustomOperatorExtractor.js";
import { Calculator } from "./Calculator.js";
import { InputHandler } from "./handler/InputHandler.js";
import { OutputHandler } from "./handler/OutputHandler.js";
import { DEFAULT_OPERATOR, END_CUSTOM_OPERATOR } from "./constants/Constants.js";

class App {
  #isCustomCalculate;
  #inputHandler;
  #customOperatorExtractor;
  #calculate;
  #outputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
    this.#customOperatorExtractor = new CustomOperatorExtractor();
    this.#calculate = new Calculator();
    this.#outputHandler = new OutputHandler();
  }

  async run() {
    const input = await this.#inputHandler.getInput();
    const customOperator = this.#customOperatorExtractor.extractCustomStartOperator(input)
    this.#isCustomCalculate = customOperator !== '';
    const operatorList = this.#isCustomCalculate ? [customOperator] : DEFAULT_OPERATOR;
    const expression = this.#isCustomCalculate ? input.slice(input.indexOf(END_CUSTOM_OPERATOR) + END_CUSTOM_OPERATOR.length) : input;
    const result = this.#calculate.calculate(operatorList, expression);
    this.#outputHandler.print(result);
  }
}

export default App;
