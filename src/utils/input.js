import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../constants/errorMessage.js";
import { REGEX_PATTERNS } from "../constants/regex.js";

/**
 * 사용자로부터 입력을 받아 처리하는 클래스입니다.
 */
class Input {
  /**
   * 비동기로 사용자의 입력 값을 받아 유효성을 검사하고 반환합니다.
   * @async
   * @returns {Promise<string>} 입력된 값을 반환합니다.
   * @throws {Error} 입력값에 띄어쓰기가 포함된 경우 오류를 발생시킵니다.
   */
  static async getInputValue() {
    const inputValue = (await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")).trim();
    this.validateInputValue(inputValue);

    return inputValue;
  }

  /**
   * 입력값이 유효한지 확인합니다.
   * @param {string} inputValue - 유효성 검사를 수행할 입력값입니다.
   * @throws {Error} 입력값에 띄어쓰기가 포함된 경우 오류를 발생시킵니다.
   */
  static validateInputValue(inputValue) {
    if (REGEX_PATTERNS.SPACE.test(inputValue)) {
      throw new Error(ERROR_MESSAGE.SPACE_NOT_ALLOWED);
    }
  }
}

export default Input;
