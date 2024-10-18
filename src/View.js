import { Console } from "@woowacourse/mission-utils";

class View {
  static #USER_INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";

  static #RESULT_PREFIX = "결과 : ";

  static async readUserInput() {
    const line = await Console.readLineAsync(View.#USER_INPUT_MESSAGE);
    return line;
  }

  static printResult(result) {
    Console.print(View.#RESULT_PREFIX + result);
  }
}

export default View;
