import { Console } from '@woowacourse/mission-utils';
import { displayInputGuide, getUserInput } from './functions/inputHandler.js';
import getCustomDelimiter from './functions/getCustomDelimiter.js';
import Delimiter from './Delimiter.js';
import getNumbers from './functions/getNumbers.js';
import sumNumbers from './functions/sumNumbers.js';

class App {
  constructor() {
    this.delimiter = new Delimiter();
  }

  async run() {
    displayInputGuide();
    const input = await getUserInput();

    const customDelimiter = getCustomDelimiter(input);
    if (customDelimiter) this.delimiter.setCustomDelimiter(customDelimiter);

    const processedInput = customDelimiter ? input.split('\\n')[1] : input;
    const numbers = getNumbers(processedInput, this.delimiter.getDelimiters());
    const total = sumNumbers(numbers);

    Console.print(`결과 : ${total}`);
  }
}

export default App;
