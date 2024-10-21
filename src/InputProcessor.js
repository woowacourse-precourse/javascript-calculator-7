import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constant.js";

/**
 * 사용자로부터 입력을 처리하는 클래스
 */
class InputProcessor {
  /**
   * @woowacourse/mission-utils에서 제공하는 API를 활용하여 문자열을 입력받음
   * @returns {Promise<string>} 입력된 문자열
   */
  async processInput() {
    const input = await Console.readLineAsync(INPUT_MESSAGE);
    return input;
  }
}

export default InputProcessor;
