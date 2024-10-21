import { Console } from "@woowacourse/mission-utils";

class View {
  static #USER_INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";

  static #RESULT_PREFIX = "결과 : ";

  /**
   * @public
   * @static
   * @description 안내 메시지 출력 후 사용자 입력 받기
   * @returns { Promise<String> } - 사용자 입력
   */
  static async readUserInput() {
    const line = await Console.readLineAsync(View.#USER_INPUT_MESSAGE);
    return line;
  }

  /**
   * @public
   * @static
   * @param { Number } result - 출력할 결과
   * @description prefix를 붙여 결과 출력
   */
  static printResult(result) {
    Console.print(View.#RESULT_PREFIX + result);
  }
}

export default View;
