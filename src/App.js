import { Console } from '@woowacourse/mission-utils';
import { outputMessage } from './constant.js';
import Validator from './Validator.js';
import UserInputHandler from './userInputHandler.js';

class App {
  #validator;
  constructor() {
    this.#validator = new Validator();
  }

  async run() {
    const userInput = await this.#inputText();

    const { customSeparator, removedCustomSepartor } =
      this.#validateUserInput(userInput);

    const splitedUserInput = removedCustomSepartor || userInput;

    this.#printSumResult(splitedUserInput, customSeparator);
  }

  // 사용자에게 문자열 입력받기
  async #inputText() {
    Console.print(outputMessage.startMessage);
    return await Console.readLineAsync('');
  }

  // 입력값 검증하기
  #validateUserInput(input) {
    let customSeparator = null;
    let removedCustomSepartor = null;

    this.#validator.validateStartsWith(input);

    if (this.#validator.checkStartWidthDubbleSlash(input)) {
      this.#validator.validateCustomSeparator(input);
      customSeparator = UserInputHandler.getCustomSeparator(input);
      removedCustomSepartor = UserInputHandler.getRemovedCustomSeparator(input);
    }

    this.#validator.validateUsedSeparator(
      removedCustomSepartor || input,
      customSeparator,
    );

    return { customSeparator, removedCustomSepartor };
  }

  // 결과 계산하기
  #printSumResult(input, customSeparator) {
    const splitedUserInput = UserInputHandler.getSplitedBySeparator(
      input,
      customSeparator,
    );

    const result = UserInputHandler.sum(splitedUserInput);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
