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
    const stringifiedUserInput = stringifyToJSON(userInput);

    const separator = this.getSeparator(stringifiedUserInput);
    const userInputWithoutSeparator =
      this.extractSeparator(stringifiedUserInput);

    const separatorRegExp = convertCharacterClassRegex(separator);

    const separatedUserInput = userInputWithoutSeparator.split(separatorRegExp);

    validatePositiveNumberArray(separatedUserInput);

    const separatedUserInputsNumberArray =
      convertNumberArray(separatedUserInput);

    const sumOfUserInput = sumArray(separatedUserInputsNumberArray);

    printResult(sumOfUserInput);
  }

  getSeparator(str) {
    const customSeparator = str.match(CUSTOM_SEPARATOR_REGEXP);
    if (customSeparator) return customSeparator[0].replace('\\', '\\\\');
    return DEFAULT_SEPARATOR;
  }

  extractSeparator(str) {
    const customSeparator = str.match(CUSTOM_SEPARATOR_REGEXP);
    if (customSeparator)
      return str.replace(CUSTOM_SEPARATOR_REGEXP, '').slice(1, -1);
    return str.slice(1, -1);
  }
}

export default App;
