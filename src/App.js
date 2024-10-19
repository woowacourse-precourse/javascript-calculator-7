import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class App {
  #input;
  separatorList = [",", ":"];
  #inputNumberList = [];

  async run() {
    await this.readInput();

    const validator = new Validator(this.#input, this.separatorList);
    validator.check();

    this.generateInputNumberList();
    this.printResult();
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

  printResult() {
    Console.print(this.getPrintResult());
  }

  getPrintResult() {
    return `결과 : ${this.getResult()}`;
  }
}

export default App;
