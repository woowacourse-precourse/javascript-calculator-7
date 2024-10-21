import CalculatorController from './CalculatorController.js';
import CalculatorService from './CalculatorService.js';

class App {
  async run() {
    const calculatorController = new CalculatorController(CalculatorService);
    await calculatorController.run();
  }
}

export default App;
