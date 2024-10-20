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
      this.handleError(error); // 에러 메시지 처리 방식 개선
    }
  }

  displayResult() {
    if (this.parsedData instanceof Error) {
      this.handleError(this.parsedData);
    } else {
      sumCalculator(this.parsedData); // 결과 계산
    }
  }

  handleError(error) {
    console.error(`[ERROR]: ${error.message}`);
  }

  async run() {
    try {
      const inputValue = await inputHandler();
      this.setUserInput(inputValue);
      await this.parseUserInput();
    } catch (error) {
      this.handleError(error); // 에러 메시지 처리 방식 개선
    }
  }
}

export default App;
