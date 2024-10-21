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

    try {
      const numbers = this.stringParser.parseString(input);
      const result = this.StringCalculator.calculate(numbers);
      this.ioProcessor.processOutput(result);
    } catch (error) {
      this.ioProcessor.processErrorOutput(error.message);
      return;
    }
  }
}

export default App;
