import { Console } from '@woowacourse/mission-utils';
import { errorMessage, outputMessage } from './constant.js';
import {
  checkSeperatorConflict,
  checkIncludeEmptyString,
  checkIncludeNewLine,
} from './validator.js';

class App {
  async run() {
    let customSeparator = null;
    Console.print(outputMessage.startMessage);
    let userInput = await Console.readLineAsync('');
    if (this.isStartWithNumber(userInput)) {
      checkSeperatorConflict(userInput, customSeparator);
      this.checkeCommaColonConflict(userInput);
    } else if (this.isStartWidthDubbleSlash(userInput)) {
      this.validateCustomSeperator(userInput);
      customSeparator = this.getCustomSeparator(userInput);
      this.checkUseOtherSeperator(userInput);
      checkSeperatorConflict(userInput, customSeparator);
      userInput = this.sliceCustomSeparator(userInput);
    } else {
      throw new Error(errorMessage.useNumberOrSlash);
    }

    const splitedUserInput = this.splitUserInput(userInput, customSeparator);
    const sum = this.sum(splitedUserInput);

    Console.print(`결과 : ${sum}`);
  }

  sum(arr) {
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
  }

  splitUserInput(input, customSeparator) {
    const separatorRegExp = new RegExp(`${customSeparator}|[,:]`);
    return input.split(separatorRegExp);
  }

  sliceCustomSeparator(input) {
    return input.split('\\n')[1];
  }

  getCustomSeparator(input) {
    let splitInput = input.split(/(?:\/\/|\\n)/);
    const customSeperator = splitInput[1];
    return customSeperator;
  }

  isStartWithNumber(input) {
    const regExp = /^[1-9]/;
    return regExp.test(input);
  }

  isStartWidthDubbleSlash(input) {
    const regExp = /^(\/\/)/;
    return regExp.test(input);
  }

  checkeCommaColonConflict(input) {
    let result = false;
    const duplicateComma = /,,+/;
    const duplicateColon = /::+/;
    const commaColonRegExp = /,:/;
    const colonCommaRegExp = /:,/;

    if (duplicateColon.test(input)) result = true;
    if (duplicateComma.test(input)) result = true;
    if (commaColonRegExp.test(input)) result = true;
    if (colonCommaRegExp.test(input)) result = true;

    if (result) throw new Error(errorMessage.useSeperatorConflict);
  }

  checkIncludeNewLine(input) {
    const newLineRegExp = /\\n/;
    if (!newLineRegExp.test(input)) throw new Error(errorMessage.useNewLine);
  }

  checkIncludeEmptyString(input) {
    const splitInput = input.split(/(?:\/\/|\\n)/);
    if (splitInput[1] === '') throw new Error(errorMessage.useCoustomSeparator);
  }

  checkUseOtherSeperator(input) {
    let splitInput = input.split(/(?:\/\/|\\n)/);
    const customSeperator = splitInput[1];

    const basicSeparatorRegExp = /[,:]/;

    splitInput = splitInput.join('').split(basicSeparatorRegExp).join('');
    splitInput = splitInput.split(customSeperator).join('');

    if (!Number(splitInput))
      throw new Error(errorMessage.useCustomOrBasicSeparator);
  }

  validateCustomSeperator(input) {
    checkIncludeNewLine(input);
    checkIncludeEmptyString(input);
  }
}

export default App;
