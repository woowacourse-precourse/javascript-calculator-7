import CalculatorController from "./controllers/CalculatorController.js";

class App {
  async run() {
    await new CalculatorController().calculatorProcess();
  }
}

export default App;
