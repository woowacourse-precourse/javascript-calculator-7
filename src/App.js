import AdditionController from './CalculatorController.js';
import AdditionService from './CalculatorService.js';

class App {
  async run() {
    const additoonController = new AdditionController(AdditionService);
    additoonController.run();
  }
}

export default App;
