import CalculatorController from './CalculatorController.js';
import CalculatorService from './CalculatorService.js';

class App {
  async run() {
    const calculatorController = new CalculatorController(CalculatorService);
    const result = await calculatorController.run();
    calculatorController.showresult(result);
  }
}

export default App;
