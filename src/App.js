import IOProcessor from "./IOProcessor.js";
import StringParser from "./StringParser.js";
import StringCalculator from "./StringCalculator.js";

class App {
  constructor() {
    this.ioProcessor = new IOProcessor();
    this.stringParser = new StringParser();
    this.StringCalculator = new StringCalculator();
  }

  async run() {
    const input = await this.ioProcessor.processInput();
    const numbers = this.stringParser.parseString(input);
    const result = this.StringCalculator.calculate(numbers);
  }
}

export default App;
