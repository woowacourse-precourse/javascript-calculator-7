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

import {
  sum,
  getCustomSeparator,
  getRemovedCustomSeparator,
  getSplitedBySeparator,
} from './userInputHandler.js';

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
      customSeparator = getCustomSeparator(userInput);
      removedCustomSepartor = getRemovedCustomSeparator(userInput);
      checkUseOtherSeperator(removedCustomSepartor, customSeparator);
      checkSeperatorConflict(removedCustomSepartor, customSeparator);
    } else {
      throw new Error(errorMessage.useNumberOrSlash);
    }

    const splitedUserInput = getSplitedBySeparator(
      removedCustomSepartor || userInput,
      customSeparator,
    );
    const result = sum(splitedUserInput);

    Console.print(`결과 : ${result}`);
  }

  validateCustomSeperator(input) {
    checkIncludeNewLine(input);
    checkIncludeEmptyString(input);
  }
}

export default App;
