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
    const { separator, newUserInput } = this.getSeparator(stringifiedUserInput);
    const separatorRegExp = convertCharacterClassRegex(separator);

    const separatedUserInput = newUserInput.split(separatorRegExp);

    validatePositiveNumberArray(separatedUserInput);

    const separatedUserInputsNumberArray =
      convertNumberArray(separatedUserInput);

    const sumOfUserInput = sumArray(separatedUserInputsNumberArray);

    printResult(sumOfUserInput);
  }

  getSeparator(str) {
    const customSeparatorMatchedString = str.match(CUSTOM_SEPARATOR_REGEXP);
    if (customSeparatorMatchedString)
      return {
        separator: customSeparatorMatchedString[1].replace('\\', '\\\\'),
        newUserInput: str.replace(CUSTOM_SEPARATOR_REGEXP, '').slice(1, -1),
      };
    return {
      separator: DEFAULT_SEPARATOR,
      newUserInput: str.slice(1, -1),
    };
  }
}

export default App;
