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

    const { customSeparator, processedUserInput } =
      this.#validateUserInput(userInput);

    const sumResult = this.#sumUserInput(
      processedUserInput || userInput,
      customSeparator,
    );
    this.#printSumResult(sumResult);
  }

  // 사용자에게 문자열 입력받기
  async #inputText() {
    Console.print(outputMessage.startMessage);
    return await Console.readLineAsync('');
  }

  // 입력값 검증하기
  #validateUserInput(input) {
    let customSeparator = null;
    let processedUserInput = null;

    this.#validator.validateStartsWith(input);

    if (this.#validator.checkStartWidthDubbleSlash(input)) {
      this.#validator.validateCustomSeparator(input);
      customSeparator = UserInputHandler.getCustomSeparator(input);
      processedUserInput = UserInputHandler.getRemovedCustomSeparator(input);
    }

    this.#validator.validateUsedSeparator(
      processedUserInput || input,
      customSeparator,
    );

    return { customSeparator, processedUserInput };
  }

  #sumUserInput(input, customSeparator) {
    const splitedUserInput = UserInputHandler.getSplitedBySeparator(
      input,
      customSeparator,
    );

    return UserInputHandler.sum(splitedUserInput);
  }

  #printSumResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
