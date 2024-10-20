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
    displayInputGuide();
    const input = await getUserInput();

    const customDelimiter = getCustomDelimiter(input);
    const processedInput = customDelimiter ? input.split('\\n')[1] : input;
    if (customDelimiter) this.delimiter.setCustomDelimiter(customDelimiter);

    const numbers = getNumbers(processedInput, this.delimiter.getDelimiters());
    const total = sumNumbers(numbers);
    printResult(total);
  }
}

export default App;
