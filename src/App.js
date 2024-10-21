import Controller from "./controller/controller.js";

class App {
  #controller

  constructor() {
    this.#controller = new Controller();
  }

  async run() {
    await this.#controller.calculate();
  }
}

export default App;
