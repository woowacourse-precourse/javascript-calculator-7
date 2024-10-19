import getUserInput from './IO/inputHandler.js';
import parseInput from './delimiterHandler.js';
import sumCalculation from './calculator.js';
import { isEmptyString, validateNumbers } from './validator.js';
import printResult from './IO/printResult.js';

class App {
  async run() {
    const userInput = await getUserInput();

    if (isEmptyString(userInput)) {
      printResult();
      return;
    }

    const rawValues = parseInput(userInput);
    const numbers = validateNumbers(rawValues);
    const result = sumCalculation(numbers);
    printResult(result);
  }
}

export default App;
