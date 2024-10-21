import InputView from "./InputView.js";
import DelimiterParser from "./DelimiterParser.js";
import sumNumbers from "./Calculator.js";
import outputView from "./OutputView.js";

class App {
  async run() {
    const inputString = await this.getInputData();
    const numbers = this.splitString(inputString);
    const result = this.calculateSum(numbers);
    outputView(result);
  }

  async getInputData() {
    const string = await InputView.readString();
    return string;
  }

  splitString(input) {
    const parser = new DelimiterParser();
    const numbers = parser.parseAndSplit(input);
    return numbers;
  }

  calculateSum(numbers) {
    return sumNumbers(numbers);
  }
}

const app = new App();

export default App;
