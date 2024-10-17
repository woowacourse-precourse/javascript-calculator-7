import CalculatorController from "./controllers/calculatorcontroller";

class App {
  #controller;

  constructor() {
    this.#controller = new CalculatorController();
  }

  async run() {
    await this.#controller.startRun();
  }
}

const app = new App();
app.run();

export default App;
