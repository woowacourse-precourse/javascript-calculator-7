
import { getStringifiedString, getUserInput,checkTheNumberArray,getOrRegExpFromString,getSum,printResult } from './utils';

class App {
  defaultSeparator = ',:';
  customSeparatorRegExr = /\/\/.+\\n/;
  async run() {
    const userInput = await getUserInput();
    const stringifiedUserInput = getStringifiedString(userInput);
    const { separator, newUserInput } = this.getSeparator(stringifiedUserInput);
    const separatorRegExp = getOrRegExpFromString(separator);

    const separatedUserInput = newUserInput.split(separatorRegExp);

    checkTheNumberArray(separatedUserInput);

    const separatedUserInputsNumberArray = separatedUserInput.map(it =>
      Number(it),
    );

    const sumOfUserInput = getSum(separatedUserInputsNumberArray);

    printResult(sumOfUserInput);
  }
  
  getSeparator(str) {
    const customSeparatorMatchedString = str.match(this.customSeparatorRegExr);
    if (customSeparatorMatchedString)
      return {
        separator: customSeparatorMatchedString[0]
          .slice(2, -2)
          .replace('\\', '\\\\'),
        newUserInput: str.slice(customSeparatorMatchedString[0].length + 1, -1),
      };
    return {
      separator: this.defaultSeparator,
      newUserInput: str.slice(1, -1),
    };
  }
}

export default App;
