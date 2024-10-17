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
    this.validateStartsWith(userInput);

    if (checkStartWidthDubbleSlash(userInput)) {
      this.validateCustomSeparator(userInput);
      customSeparator = getCustomSeparator(userInput);
      removedCustomSepartor = getRemovedCustomSeparator(userInput);
    }

    this.validateUsedSeparator(
      removedCustomSepartor || userInput,
      customSeparator,
    );

    const splitedUserInput = getSplitedBySeparator(
      removedCustomSepartor || userInput,
      customSeparator,
    );
    const result = sum(splitedUserInput);

    Console.print(`결과 : ${result}`);
  }

  validateStartsWith(input) {
    if (checkStartWidthDubbleSlash(input)) return;
    if (checkStartWithNumber(input)) return;
    throw new Error(errorMessage.useNumberOrSlash);
  }

  validateUsedSeparator(input, customSeparator) {
    checkUseOtherSeperator(input, customSeparator);
    checkSeperatorConflict(input, customSeparator);
  }

  validateCustomSeparator(input) {
    checkIncludeNewLine(input);
    checkIncludeEmptyString(input);
  }
}

export default App;
