import { CUSTOM_SEPARATOR_REGEXP, DEFAULT_SEPARATOR } from './constants.js';
import {
  stringifyToJSON,
  readLineAsync,
  validatePositiveNumberArray,
  convertCharacterClassRegex,
  sumArray,
  printResult,
  convertNumberArray,
} from './utils.js';

class App {
  async run() {
    const userInput = await readLineAsync();
    const processedInput = this.processInput(userInput);
    const sum = this.calculateSum(processedInput);
    printResult(sum);
  }

  processInput(input) {
    const stringified = stringifyToJSON(input);
    const separator = this.getSeparator(stringified);
    const content = this.extractContent(stringified);
    const separatorRegExp = convertCharacterClassRegex(separator);

    return content.split(separatorRegExp);
  }

  getSeparator(str) {
    const customSeparator = str.match(CUSTOM_SEPARATOR_REGEXP);

    if (customSeparator) return customSeparator[0].replace('\\', '\\\\');
    return DEFAULT_SEPARATOR;
  }

  extractContent(str) {
    const customSeparator = str.match(CUSTOM_SEPARATOR_REGEXP);

    if (customSeparator)
      return str.replace(CUSTOM_SEPARATOR_REGEXP, '').slice(1, -1);
    return str.slice(1, -1);
  }

  calculateSum(input) {
    validatePositiveNumberArray(input);
    const numberArray = convertNumberArray(input);

    return sumArray(numberArray);
  }
}

export default App;
