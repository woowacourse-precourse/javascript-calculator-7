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
    return { customSeparator: customSeparatorAndNumbers, numbers };
  }

  /**
   *
   * @param {string} numbers - 구분자와 숫자로 이루어진 문자열
   * @returns
   */
  validateNumbers(numbers) {
    const isSeparator = (num) => num === "" || [",", ":"].includes(num) || this.customSeparator.includes(`//${num}`);

    if (numbers.includes("0")) throw new IncludeZeroError();
    if (!numbers.split(/[1-9]/).every(isSeparator)) throw new InvalidSeparatorError();

    return numbers;
  }
}

export default Input;
