import { Console } from '@woowacourse/mission-utils';
import { outputMessage } from './constant.js';
import Validator from './Validator.js';

import {
  sum,
  getCustomSeparator,
  getRemovedCustomSeparator,
  getSplitedBySeparator,
} from './userInputHandler.js';

class App {
  #validator;
  constructor() {
    this.#validator = new Validator();
  }
  async run() {
    let customSeparator = null;
    let removedCustomSepartor = null;
    Console.print(outputMessage.startMessage);
    let userInput = await Console.readLineAsync('');
    this.#validator.validateStartsWith(userInput);

    if (this.#validator.checkStartWidthDubbleSlash(userInput)) {
      this.#validator.validateCustomSeparator(userInput);
      customSeparator = getCustomSeparator(userInput);
      removedCustomSepartor = getRemovedCustomSeparator(userInput);
    }

    this.#validator.validateUsedSeparator(
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
}

export default App;
