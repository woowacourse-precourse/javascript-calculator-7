import { Console } from '@woowacourse/mission-utils';
import { errorMessage, outputMessage } from './constant.js';

class App {
  async run() {
    Console.print(outputMessage.startMessage);
    const userInput = await Console.readLineAsync('');
    if (this.isStartWithNumber(userInput)) {
      this.checkSeperator(userInput);
      this.checkeCommaColonConflict(userInput);
    } else if (this.isStartWidthDubbleSlash(userInput)) {
      this.checkIncludeNewLine(userInput);
      this.checkIncludeEmptyString(userInput);
      this.checkUseOtherSeperator(userInput);
      this.checkSeperatorConflict(userInput);
    } else {
      throw new Error(errorMessage.useNumberOrSlash);
    }
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
    const customSeperatorRegExp = new RegExp(customSeperator);

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
