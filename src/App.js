import { getInput } from './View/GetUserInput.js';
import { inputNumberValidation } from './Model/InputValidator.js';
import { sumNumbersFromString } from './Model/NumberSumExtractor.js';
import { resultPrinter } from './View/SumResultPrinter.js';

class App {
  async run() {
    const userInput = await getInput();
    inputNumberValidation(userInput);
    const result = sumNumbersFromString(userInput);
    resultPrinter(result);
  }
}

export default App;
