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
}

export default App;
