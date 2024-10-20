import OutputView from './views/OutputView.js';
import CalculatorController from './controllers/CalculatorController.js';

class App {
  constructor() {
    this.calculator = CalculatorController;
    this.outputView = OutputView;
  }

  async run() {
    try {
      const result = await this.calculator.run();
      this.outputView.printResult(result);
    } catch (error) {
      this.outputView.printError(error.message);
      throw error;
    }
  }
}

export default App;
