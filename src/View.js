import { Console } from "@woowacourse/mission-utils";

class View {
  static #USER_INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";

  static async readUserInput() {
    const line = await Console.readLineAsync(View.#USER_INPUT_MESSAGE);
    return line;
  }
}

export default View;
