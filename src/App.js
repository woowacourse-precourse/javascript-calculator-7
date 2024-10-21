import InputProcessor from "./InputProcessor.js";
import StringParser from "./StringParser.js";
import StringCalculator from "./StringCalculator.js";

class App {
  constructor() {
    this.inputProcessor = new InputProcessor();
    this.stringParser = new StringParser();
    this.StringCalculator = new StringCalculator();
  }

  async run() {
    const input = await this.inputProcessor.processInput();
    const numbers = this.stringParser.parseString(input);
    const result = this.StringCalculator.calculate(numbers);
  }
}

export default App;
