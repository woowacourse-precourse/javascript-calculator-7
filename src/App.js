import Input from "./input.js";

class App {
  constructor() {
    this.userInput = new Input();
  }

  async run() {
    const input = this.userInput.getUserInput();
  }
}

export default App;
