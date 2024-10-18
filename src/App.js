import Service from './Service.js';
import { inputText, printSumResult } from './util.js';

class App {
  #service;
  constructor() {
    this.#service = new Service();
  }

  async run() {
    const userInput = await inputText();
    // 사용자 입력값 검증하기
    this.#service.validateUserInput(userInput);
    // 검증된 사용자 입력값 커스텀 구분자 추출하기
    const { customSeparator, processedUserInput } =
      this.#service.parseUserInput(userInput);
    // 합 구하기
    const sumResult = this.#service.sumUserInput(
      processedUserInput,
      customSeparator,
    );
    printSumResult(sumResult);
  }
}

export default App;
