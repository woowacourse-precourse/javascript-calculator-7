import inputHandler from "./inputHandler.js";

class App {
  constructor() {
    this.userInput = "";
  }

  setUserInput(value) {
    this.userInput = value.trim();
  }

  async run() {
    try {
      const inputValue = await inputHandler();
      this.setUserInput(inputValue);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
