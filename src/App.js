import { Console } from "@woowacourse/mission-utils";
import inputView from "./inputView.js";
import Splitter from "./Splitter.js";

class App {
  #splitter;

  constructor() {
    this.#splitter = new Splitter();
  }

  async run() {
    const userInput = await inputView.readUserInput();
    // TODO : 커스텀 구분자를 사용하는 경우에 //{구분자 1문자}\n 형식이 맞는지 확인해야 함.
    const numbers = this.#splitter.splitToNumber(userInput);
    Console.print(numbers);
  }
}

export default App;
