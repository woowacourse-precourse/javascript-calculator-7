import { CUSTOM_SEPARATOR_REGEXP, DEFAULT_SEPARATOR } from './constants.js';
import {
  getStringifiedString,
  getUserInput,
  checkTheNumberArray,
  getOrRegExpFromString,
  getSum,
  printResult,
  getNumberArray,
} from './utils.js';

class App {
  async run() {
    const userInput = await getUserInput();
    const stringifiedUserInput = getStringifiedString(userInput);
    const { separator, newUserInput } = this.getSeparator(stringifiedUserInput);
    const separatorRegExp = getOrRegExpFromString(separator);

    const separatedUserInput = newUserInput.split(separatorRegExp);

    checkTheNumberArray(separatedUserInput);

    const separatedUserInputsNumberArray = getNumberArray(separatedUserInput);

    const sumOfUserInput = getSum(separatedUserInputsNumberArray);

    printResult(sumOfUserInput);
  }

  getSeparator(str) {
    const customSeparatorMatchedString = str.match(CUSTOM_SEPARATOR_REGEXP);
    if (customSeparatorMatchedString)
      return {
        separator: customSeparatorMatchedString[0]
          .slice(2, -2)
          .replace('\\', '\\\\'),
        newUserInput: str.replace(CUSTOM_SEPARATOR_REGEXP, '').slice(1, -1),
      };
    return {
      separator: DEFAULT_SEPARATOR,
      newUserInput: str.slice(1, -1),
    };
  }
}

export default App;
