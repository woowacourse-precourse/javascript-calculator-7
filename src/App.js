import inputHandler from "./inputHandler.js";
import stringParser from "./stringParser.js";
import sumCalculator from "./sumCalculator.js";

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
      this.displayResult();
    } catch (error) {
      throw error;
    }
  }

  displayResult() {
    if (this.parsedData instanceof Error) {
      throw this.parsedData;
    } else {
      sumCalculator(this.parsedData); // 결과 계산
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
