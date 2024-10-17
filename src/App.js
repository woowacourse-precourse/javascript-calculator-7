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
    // 사용자 입력값 검증하기
    this.#validateUserInput(userInput);

    // 검증된 사용자 입력값 커스텀 구분자 추출하기
    const { customSeparator, processedUserInput } =
      this.#parseUserInput(userInput);

    const sumResult = this.#sumUserInput(processedUserInput, customSeparator);
    this.#printSumResult(sumResult);
  }

  // 사용자에게 문자열 입력받기
  async #inputText() {
    Console.print(outputMessage.startMessage);
    return await Console.readLineAsync('');
  }

  // 입력값 검증하기
  #validateUserInput(input) {
    // 더블슬래시와 숫자로 시작하는지 검증
    this.#validator.validateStartsWith(input);

    // 커스텀 구분자와 정제된 입력값 추출
    const { customSeparator, processedUserInput } = this.#parseUserInput(input);

    // 구분자를 제대로 사용했는지 검증
    this.#validator.validateUsedSeparator(processedUserInput, customSeparator);
  }

  #parseUserInput(input) {
    let customSeparator = null;
    let processedUserInput = null;

    // 더블슬래시로 시작하는 경우만 추출
    if (this.#validator.checkStartWidthDubbleSlash(input)) {
      // 사용 가능한 커스텀 구분자인지 검증
      this.#validator.validateCustomSeparator(input);

      customSeparator = UserInputHandler.getCustomSeparator(input);
      processedUserInput = UserInputHandler.getRemovedCustomSeparator(input);
    }

    return { customSeparator, processedUserInput: processedUserInput || input };
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
