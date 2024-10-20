import getUserInput from './controllers/inputController.js';
import splitStringByDelimiter from './utils/delimiter.js';
import sumCalculation from './utils/calculator.js';
import { isEmptyString } from './utils/validator.js';
import printResult from './views/resultView.js';
import convertStringToNumber from './utils/converter.js';

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
