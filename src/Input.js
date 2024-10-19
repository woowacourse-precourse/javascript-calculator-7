import { MissionUtils } from "@woowacourse/mission-utils";
import { IncludeZeroError, InvalidSeparatorError } from "./Error";

class Input {
  customSeparator;

  numbers;

  constructor() {
    this.customSeparator = [];
    this.numbers = "";
  }

  async getPlusString() {
    try {
      const plusString = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n",
      );
      const { customSeparator, numbers } = this.findCustomSeparatorAndNumbers(plusString);

      this.customSeparator = customSeparator;
      this.numbers = numbers;

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
    return { customSeparator: customSeparatorAndNumbers.map((sep) => sep.replace("//", "")), numbers };
  }

  /**
   * 연산 문자열이 구분자와 양수로만 이루어져 있는지 검증합니다.
   * @returns {string}
   */
  validateNumbers() {
    const isSeparator = (num) => num === "" || [",", ":"].includes(num) || this.customSeparator.includes(num);

    if (this.numbers.includes("0")) throw new IncludeZeroError();
    if (!this.numbers.split(/[1-9]/).every(isSeparator)) throw new InvalidSeparatorError();

    return this.numbers;
  }

  validateSeparators() {
    return this.customSeparator;
  }
}

export default Input;
