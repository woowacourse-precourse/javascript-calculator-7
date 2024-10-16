import { Console } from '@woowacourse/mission-utils';
import { errorMessage, outputMessage } from './constant.js';

class App {
  async run() {
    Console.print(outputMessage.startMessage);
    const userInput = await Console.readLineAsync('');
    if (this.isStartWithNumber(userInput)) {
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
}

export default App;
