import inputHandler from "./inputHandler.js";
import stringParser from "./stringParser.js";

class App {
  constructor() {
    this.userInput = "";
    this.parsedData = null;
  }

  setUserInput(value) {
    this.userInput = value.trim();
  }

  async parseUserInput() {
    try {
      this.parsedData = stringParser(this.userInput);
    } catch (error) {
      throw error;
    }
  }

  async run() {
    try {
      const inputValue = await inputHandler();
      this.setUserInput(inputValue);
      await this.parseUserInput();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
