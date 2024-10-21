import InputProcessor from "./InputProcessor.js";
import StringParser from "./StringParser.js";

class App {
  constructor() {
    this.inputProcessor = new InputProcessor();
    this.stringParser = new StringParser();
  }

  async run() {
    const input = await this.inputProcessor.processInput();
    const numbers = this.stringParser.parseString(input);
  }
}

export default App;
