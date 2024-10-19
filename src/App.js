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
  }

  async readInput() {
    this.#input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (Validator.isInValid(this.#input, this.separatorList)) {
      throw new Error("[ERROR]: 에러입니다.");
    }

    Console.print(this.#input);
  }
}

export default App;
