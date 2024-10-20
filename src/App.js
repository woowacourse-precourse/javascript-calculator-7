import displayInputGuide from './functions/displayInputGuide.js';
import getCustomDelimiter from './functions/getCustomDelimiter.js';
import Delimiter from './Delimiter.js';
import getNumbers from './functions/getNumbers.js';
import sumNumbers from './functions/sumNumbers.js';
import { getUserInput, printResult } from './utils/missionUtils.js';

class App {
  constructor() {
    this.delimiter = new Delimiter();
  }

  async run() {
    try {
      displayInputGuide();
      const input = await getUserInput();
      const customDelimiter = getCustomDelimiter(input);
      if (customDelimiter) this.delimiter.setCustomDelimiter(customDelimiter);
      const processedInput = customDelimiter ? input.split('\\n')[1] : input;
      const numbers = getNumbers(
        processedInput,
        this.delimiter.getDelimiters(),
      );
      const total = sumNumbers(numbers);
      printResult(total);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
