import { Calculator } from "./Calculator.js";
import { Console } from "./Console.js";

class App {
  constructor() {
    this.calculator = new Calculator([",", ":"]);
    this.console = new Console();
  }

  async run() {
    try {
      const userInput = await this.console.read(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      this.calculator.extractCustomSeperator(userInput);
      const processedInput = this.calculator.replaceAllSeperators(userInput);
      const validInputArray = this.calculator.validateInput(processedInput);

      const sum = this.calculator.sumAll(validInputArray);
      this.console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
