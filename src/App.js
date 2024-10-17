import { InputHandler } from "./handler/InputHandler.js";

class App {
  #inputHandler;

  async run() {
    this.#inputHandler = new InputHandler();
    await this.#inputHandler.getInput()
  }
}

export default App;
