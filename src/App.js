import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class App {
  #input;
  separatorList = [",", ":"];
  #validator;
  #inputNumberList = [];

  constructor() {
    this.#validator = new Validator();
  }

  async run() {
    await this.readInput();

    if (Validator.isInValid(this.#input, this.separatorList)) {
      throw new Error("[ERROR]: 에러입니다.");
    }

    this.generateInputNumberList();
  }

  async readInput() {
    this.#input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  generateInputNumberList() {
    this.#inputNumberList = this.#input.match(/[0-9]+/g).map(Number);
  }

  getResult() {
    return this.#inputNumberList.reduce((acc, current) => acc + current);
  }
}

export default App;
