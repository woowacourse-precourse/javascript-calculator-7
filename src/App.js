import { validate } from './utils/validation.js';
import { getInput, printAnswer } from './utils/inputOutputHelpers.js';
import Calculator from './Calculator.js';

class App {
  async run() {
    const receivedInput = await getInput();

    validate(receivedInput);

    const calculator = new Calculator(receivedInput);
    const result = calculator.sumAll();

    printAnswer(result);
  }
}

export default App;
