import { Console } from '@woowacourse/mission-utils';
import { errorMessage, outputMessage } from './constant.js';
import {
  checkSeperatorConflict,
  checkIncludeEmptyString,
  checkIncludeNewLine,
  checkStartWithNumber,
  checkStartWidthDubbleSlash,
  checkUseOtherSeperator,
} from './validator.js';

class App {
  async run() {
    let customSeparator = null;
    let removedCustomSepartor = null;
    Console.print(outputMessage.startMessage);
    let userInput = await Console.readLineAsync('');
    if (checkStartWithNumber(userInput)) {
      checkUseOtherSeperator(userInput, customSeparator);
      checkSeperatorConflict(userInput, customSeparator);
    } else if (checkStartWidthDubbleSlash(userInput)) {
      this.validateCustomSeperator(userInput);
      customSeparator = this.getCustomSeparator(userInput);
      removedCustomSepartor = this.getRemovedCustomSepartor(userInput);
      checkUseOtherSeperator(removedCustomSepartor, customSeparator);
      checkSeperatorConflict(removedCustomSepartor, customSeparator);
    } else {
      throw new Error(errorMessage.useNumberOrSlash);
    }

    const splitedUserInput = this.getSplitedBySeparator(
      removedCustomSepartor || userInput,
      customSeparator,
    );
    const sum = this.sum(splitedUserInput);

    Console.print(`결과 : ${sum}`);
  }

  sum(arr) {
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
  }

  getSplitedBySeparator(input, customSeparator) {
    const separatorRegExp = new RegExp(
      `${customSeparator ? customSeparator + '|' : ''}[,:]`,
    );
    return input.split(separatorRegExp);
  }

  getCustomSeparator(input) {
    let splitInput = input.split(/(?:\/\/|\\n)/);
    const customSeperator = splitInput[1];
    return customSeperator;
  }

  getRemovedCustomSepartor(input) {
    return input.split(/\\n/)[1];
  }

  validateCustomSeperator(input) {
    checkIncludeNewLine(input);
    checkIncludeEmptyString(input);
  }
}

export default App;
