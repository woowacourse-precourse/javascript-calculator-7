import calculator from "./Calculator.js";
import Splitter from "./Splitter.js";
import validator from "./Validator.js";
import View from "./View.js";

class App {
  #splitter;

  constructor() {
    this.#splitter = new Splitter();
  }

  /**
   * @public
   * @description
   * 1. 사용자 입력 받기
   * 2. 입력값을 구분자로 분할
   * 3. 숫자 배열 검증
   * 4. 숫자 배열의 합 구하기
   * 5. 결과 출력
   */
  async run() {
    const userInput = await View.readUserInput();
    const numbers = this.#splitter.split(userInput);
    validator.validateNumberArray(numbers);
    const sum = calculator.sum(numbers);
    View.printResult(sum);
  }
}

export default App;
