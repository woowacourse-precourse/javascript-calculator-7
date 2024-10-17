import StringAdditionController from "./controllers/calculatorcontroller.js";

class App {
  #controller;

  constructor() {
    this.#controller = new StringAdditionController();
  }

  async run() {
    await this.#controller.startRun();
  }
}

const app = new App();
app.run();

export default App;
