import CalculatorController from "./controller/CalculatorController.js";

class App {
  async run() {
    const controller = new CalculatorController();
    await controller.run();
  }
}

export default App;
