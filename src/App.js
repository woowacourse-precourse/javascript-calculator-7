import InputView from "./InputView.js";
import DelimiterParser from "./DelimiterParser.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    const inputString = await this.getInputData();
    const numbers = this.splitString(inputString);
    const result = this.CalculateNumber(numbers);
  }

  async getInputData() {
    const string = await InputView.readString();
    return string;
  }

  splitString(string) {
    const parser = new DelimiterParser();
    const numbers = parser.parseAndSplit(string);
    return numbers;
  }

  CalculateNumber(numbers) {
    const calculate = new Calculator();
    const result = calculate.add(numbers);
    return result;
  }
}

const app = new App();

export default App;
