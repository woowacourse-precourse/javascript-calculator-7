import StringCalculatorController from "./controller/StringCalculatorController";
class App {
  async run() {
    const controller = new StringCalculatorController();
    await controller.startCalculation();
  }
}

export default App;