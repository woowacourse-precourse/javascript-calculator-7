import { displayInputGuide, getUserInput } from './functions/inputHandler.js';
import getCustomDelimiter from './functions/getCustomDelimiter.js';

class App {
  constructor() {
    this.inputHandler = { displayInputGuide, getUserInput };
  }

  async run() {
    this.inputHandler.displayInputGuide();
    this.inputHandler.getUserInput(input => {
      const customDelimiter = getCustomDelimiter(input);

      console.log(customDelimiter);
    });
  }
}

export default App;
