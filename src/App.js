import { Console } from '@woowacourse/mission-utils';
import { errorMessage, outputMessage } from './constant.js';

class App {
  async run() {
    let customSeparator = null;
    Console.print(outputMessage.startMessage);
    let userInput = await Console.readLineAsync('');
    if (this.isStartWithNumber(userInput)) {
      this.checkSeperator(userInput);
      this.checkeCommaColonConflict(userInput);
    } else if (this.isStartWidthDubbleSlash(userInput)) {
      this.checkIncludeNewLine(userInput);
      this.checkIncludeEmptyString(userInput);
      customSeparator = this.getCustomSeparator(userInput);
      this.checkUseOtherSeperator(userInput);
      this.checkSeperatorConflict(userInput);
      userInput = this.sliceCustomSeparator(userInput);
    } else {
      throw new Error(errorMessage.useNumberOrSlash);
    }

    const splitedUserInput = this.splitUserInput(userInput, customSeparator);
    const sum = this.sum(splitedUserInput);
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

  checkSeperator(input) {
    if (!Boolean(Number(input.split(/[,:]/).join('')))) {
      throw new Error(errorMessage.useCommaOrColon);
    }
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

  checkSeperatorConflict(input) {
    this.checkeCommaColonConflict(input);

    let splitInput = input.split(/(?:\/\/|\\n)/);
    const customSeperator = splitInput[1];

    const regExpString = `${customSeperator}{2,}|${customSeperator}[,:]|[,:]{2,}|[,:]${customSeperator}`;

    const conflictRegExt = new RegExp(regExpString);

    if (conflictRegExt.test(splitInput.join('')))
      throw new Error(errorMessage.useSeperatorConflict);
  }
}

export default App;
