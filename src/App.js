import InputView from "./InputView.js";
import DelimiterParser from "./DelimiterParser.js";
import sumNumbers from "./Calculator.js";
import outputView from "./OutputView.js";

class App {
  async run() {
    const inputString = await this.getStringInput();
    const numbers = this.parseInputToNumber(inputString);
    const result = sumNumbers(numbers);
    outputView(result);
  }

  getStringInput() {
    return InputView.readString();
  }

  parseInputToNumber(input) {
    const parser = new DelimiterParser();
    return parser.splitInputToNumbers(input);
  }
}

const app = new App();

export default App;
