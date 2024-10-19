import { Calculator } from "./Calculator";
import { Console } from "./Console";

class App {
  constructor() {
    this.calculator = new Calculator([",", ":"]);
    this.console = new Console();
  }

  async run() {
    const userInput = await this.console.read(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    this.calculator.extractCustomSeperator(userInput);
    const processedInput = this.calculator.replaceAllSeperators(userInput);
    const validInputArray = this.calculator.validateInput(processedInput);

    const sum = this.calculator.sumAll(validInputArray);
    this.console.print(`결과 : ${sum}`);
  }
}

export default App;
