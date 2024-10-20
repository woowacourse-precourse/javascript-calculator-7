import calculator from "./Calculator.js";
import Splitter from "./Splitter.js";
import validator from "./Validator.js";
import View from "./View.js";

class App {
  #splitter;

  constructor() {
    this.#splitter = new Splitter();
  }

  async run() {
    const userInput = await View.readUserInput();
    const numbers = this.#splitter.split(userInput);
    validator.validateNumberArray(numbers);
    const sum = calculator.sum(numbers);
    View.printResult(sum);
  }
}

export default App;
