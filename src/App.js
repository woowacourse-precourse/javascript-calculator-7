import { validation } from './utils/validate.js';
import { getInput, printAnswer } from './utils/inputOutputHelpers.js';
import Calculator from './Calculator.js';

class App {
  async run() {
    const receivedInput = await getInput();

    validation(receivedInput);

    const calculator = new Calculator(receivedInput);
    const result = calculator.sumAll();

    printAnswer(result);
  }
}

export default App;
