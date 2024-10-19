import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class App {
  #input;
  separatorList = [",", ":"];
  #validator;

  constructor() {
    this.#validator = new Validator();
  }

  async run() {
    await this.readInput();
    if (Validator.isInValid(this.#input, this.separatorList)) {
      throw new Error("[ERROR]: 에러입니다.");
    }
  }

  async readInput() {
    this.#input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }
}

export default App;
