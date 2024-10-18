import { displayInputGuide, getUserInput } from './inputHandler.js';

class App {
  constructor() {
    this.inputHandler = { displayInputGuide, getUserInput };
  }

  async run() {
    this.inputHandler.displayInputGuide();

    this.inputHandler.getUserInput(input => {
      console.log(`결과: ${input}`);
    });
  }
}

export default App;
