import InputHandler from './InputHandler.js';
import Validators from './utils/validators.js';
import StringParser from "./StringParser.js";

class App {
  async run() {
    try {
      const input = await InputHandler.getInput();
      Validators.validateInput(input);
      const numbers = StringParser.parse(input);

      console.log('Numbers:', numbers);
    } catch (error) {
      console.error('[ERROR]', error.message);
    }
  }
}

export default App;
