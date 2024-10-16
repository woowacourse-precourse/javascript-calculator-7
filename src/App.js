import InputHandler from './InputHandler.js';
import Validators from './utils/Validators.js';
import StringParser from "./StringParser.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      const input = await InputHandler.getInput();
      Validators.validateInput(input);
      const numbers = StringParser.parse(input);
      const result = Calculator.sum(numbers);

      console.log('Result:', result);
    } catch (error) {
      console.error('[ERROR]', error.message);
    }
  }
}

export default App;
