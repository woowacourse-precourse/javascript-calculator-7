import StringCalculatorController from "./StringCalculatorController.js";
class App {
  async run() {
    const controller = new StringCalculatorController();
    await controller.startCalculation();
  }
}

export default App;