import { Console } from "@woowacourse/mission-utils";

class App {
  #input;

  async run() {
    await this.readInput();
  }

  async readInput() {
    this.#input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (this.isInValidInput()) {
      throw new Error("[ERROR]: 에러입니다.");
    }
  }

  isInValidInput() {
    if (this.#input.startsWith("//")) {
      const lineBreakStringIndex = this.#input.indexOf("\\n");

      if (lineBreakStringIndex === -1) {
        return true;
      }
    }

    return false;
  }
}

export default App;
