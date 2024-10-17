import calculator from "./controllers/calculatorcontroller.js";

class App {
  #controller;

  constructor() {
    this.#controller = new calculator();
  }

  async run() {
    await this.#controller.startRun();
  }
}

const app = new App();
app.run();

export default App;
