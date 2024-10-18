import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
  async getPlusString() {
    try {
      const plusString = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      return plusString;
    } catch (error) {
      // reject 되는 경우
    }
  }

  /**
    *
    * @param {string} text - 입력으로 주어진 문자열
    * @returns {{customSeparator: string[], numbers: string}}
    */
  findCustomSeparatorAndNumbers(text) {
    const customSeparatorAndNumbers = text.split("\n");
    // TODO: 원본 배열을 건드는 게 바람직한 일일까?
    const numbers = customSeparatorAndNumbers.pop();
    return { customSeparator: customSeparatorAndNumbers, numbers };
  }

  /**
   *
   * @param {string} numbers - 구분자와 숫자로 이루어진 문자열
   * @returns
   */
  validateNumbers(numbers) {
    return numbers;
  }
}

export default Input;
