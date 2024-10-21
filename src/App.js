import displayInputGuide from './functions/displayInputGuide.js';
import Delimiter from './Delimiter.js';
import { getUserInput, printResult } from './utils/missionUtils.js';
import checkEmptyInput from './functions/checkEmptyInput.js';
import getInputWithDelimiter from './functions/getInputWithDelimiter.js';
import getCalculateResult from './functions/getCalculateResult.js';

class App {
  constructor() {
    this.delimiter = new Delimiter();
  }

  async run() {
    displayInputGuide();

    const input = await getUserInput();
    if (checkEmptyInput(input)) return;

    const processedInput = getInputWithDelimiter(input, this.delimiter);
    const result = getCalculateResult(processedInput, this.delimiter);

    printResult(result);
  }
}

export default App;
