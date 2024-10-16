import InputHandler from './InputHandler.js';
import Validators from './utils/Validators.js';
import StringParser from "./StringParser.js";
import Calculator from "./Calculator.js";
import OutputHandler from "./OutputHandler.js";

class App {
  async run() {
    try {
      const input = await InputHandler.getInput();
      Validators.validateInput(input);
      const numbers = StringParser.parse(input);
      const result = Calculator.sum(numbers);
      OutputHandler.printResult(result);
    } catch (error) {
      OutputHandler.printError(error);
      throw error;
    }
  }
}

export default App;
