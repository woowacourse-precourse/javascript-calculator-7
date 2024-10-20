import { getInput } from './View/GetUserInput.js';
import { inputStringsValidation } from './Model/InputValidator.js';
import { sumNumbersFromString } from './Model/NumberSumExtractor.js';
import { resultPrinter } from './View/SumResultPrinter.js';

class App {
  async run() {
    const userInput = await getInput();
    inputStringsValidation(userInput);
    const result = sumNumbersFromString(userInput);
    resultPrinter(result);
  }
}

export default App;
