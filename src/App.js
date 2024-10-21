import InputProcessor from "./InputProcessor.js";

class App {
  constructor() {
    this.inputProcessor = new InputProcessor();
  }

  async run() {
    const input = await this.inputProcessor.processInput();
  }
}

export default App;
