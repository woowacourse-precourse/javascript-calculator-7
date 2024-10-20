import calculate from './calculate.js';
import DelimiterParser from './DelimiterParser.js';
import printMessage from './utils/print-output.js';
import readInput from './utils/read-input.js';
import { RESULT_MESSAGE } from './constants.js';

class App {
  async run() {
    const input = await readInput();

    const separator = new DelimiterParser(input);
    const numbers = separator.getNumbers();

    const result = calculate(numbers);
    printMessage(`${RESULT_MESSAGE}${result}`);
  }
}

export default App;
