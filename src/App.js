import { InputHandler } from "./handler/InputHandler.js";
import { CustomOperatorExtractor } from "./CustomOperatorExtractor.js";

class App {
  #inputHandler;
  #customOperatorExtractor;

  async run() {
    this.#inputHandler = new InputHandler();
    this.#customOperatorExtractor = new CustomOperatorExtractor();
    const input = await this.#inputHandler.getInput();
    const customOperator = this.#customOperatorExtractor.extractCustomStartOperator(input)
    console.log(customOperator);
  }
}

export default App;
