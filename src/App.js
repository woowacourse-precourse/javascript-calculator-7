import getUserInput from './IO/inputHandler.js';
import splitStringByDelimiter from './utils/delimiterHandler.js';
import sumCalculation from './calculator.js';
import { isEmptyString } from './validator.js';
import printResult from './IO/printResult.js';
import convertStringToNumber from './utils/numberHandler.js';

class App {
  async run() {
    const userInput = await getUserInput();

    if (isEmptyString(userInput)) {
      printResult();
      return;
    }

    const splitValues = splitStringByDelimiter(userInput);
    const numbers = convertStringToNumber(splitValues);
    const result = sumCalculation(numbers);
    printResult(result);
  }
}

export default App;
