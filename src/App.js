import { calculate } from './models/CalculatorModel.js';
import {
  getUserInput,
  displayErrorMessage,
  resultOutput,
} from './views/CalculatorView.js';

class App {
  async run() {
    try {
      const input = await getUserInput(); 
      const result = calculate(input); 
      resultOutput(result);
    } catch (error) {
      displayErrorMessage(error.message); 
      throw error; 
    }
  }
}
export default App;
