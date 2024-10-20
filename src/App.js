import { getInput } from './View/GetUserInput.js';
import { inputStringsValidation } from './Model/InputValidator.js';
import { sumNumbersFromInput } from './Model/NumberSumExtractor.js';
import { resultPrinter } from './View/SumResultPrinter.js';

class App {
  async run() {
    try {
      const userInput = await getInput();
      inputStringsValidation(userInput);
      const result = sumNumbersFromInput(userInput);
      resultPrinter(result);
    } catch (error) {
      // null과 undefined가 들어올 경우 발생하는 오류
      throw new Error('[ERROR] 동작중 오류가 발생했습니다');
    }
  }
}

export default App;
