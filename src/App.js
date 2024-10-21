import InputView from "./InputView.js";
import DelimiterParser from "./DelimiterParser.js";

class App {
  async run() {
    const inputString = await this.getInputData();
    const numbers = splitString(inputString);
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
}

const app = new App();

export default App;
