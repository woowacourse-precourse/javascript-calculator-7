import CalculatorController from './CalculatorController.js';
import CalculatorService from './CalculatorService.js';

class App {
  async run() {
    this.calculatorController = new CalculatorController(CalculatorService);
    await this.calculatorController.run();
  }
}

export default App;
