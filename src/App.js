import Calculator from "./Calculator.js";
import Splitter from "./Splitter.js";
import Validator from "./Validator.js";
import View from "./View.js";

class App {
  #splitter;

  constructor() {
    this.#splitter = new Splitter();
  }

  async run() {
    const userInput = await View.readUserInput();
    const numbers = this.#splitter.split(userInput);
    Validator.validateNumberArray(numbers);
    const sum = Calculator.sum(numbers);
    View.printResult(sum);
  }
}

export default App;
