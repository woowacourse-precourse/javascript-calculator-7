import { MissionUtils } from "@woowacourse/mission-utils";
import { IncludeZeroError, InvalidSeparatorError, InvalidCustomSeparatorError } from "./Error/index.js";
import { INPUT_MESSAGE, DEFAULT_SEPARATOR, REGEXP } from "./constants/index.js";

class Input {
  static async getCustomSeparatorAndNumbers() {
    const plusString = await Input.getPlusString();
    const { customSeparator, numbers } = Input.findCustomSeparatorAndNumbers(plusString);

    Input.validateSeparators(customSeparator);
    Input.validateNumbers(numbers, customSeparator);

    return { customSeparator, numbers };
  }

  static async getPlusString() {
    const plusString = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
    return plusString;
  }

  /**
   *
   * @param {string} text - 입력으로 주어진 문자열
   * @returns {{customSeparator: string[], numbers: string}}
   */
  static findCustomSeparatorAndNumbers(text) {
    if (!text) return { customSeparator: [], numbers: "" };
    const parts = text.split("\\n");

    const numbers = parts[parts.length - 1];

    const exceptDuplicateSep = [...new Set(parts.slice(0, -1))];
    const customSeparator = exceptDuplicateSep.map((sep) => sep.replace("//", ""));

    return { customSeparator, numbers };
  }

  /**
   * 연산 문자열이 구분자와 양수로만 이루어져 있는지 검증합니다.
   * @param {string[]} numbers - 연산 문자열
   * @param {string[]} customSeparator - 커스텀 구분자
   * @returns {string}
   */
  static validateNumbers(numbers, customSeparator) {
    const isSeparator = (num) => num === "" || DEFAULT_SEPARATOR.includes(num) || customSeparator.includes(num);

    if (numbers.includes("0")) throw new IncludeZeroError();
    if (!numbers.split(REGEXP.IS_NUMBER).every(isSeparator)) throw new InvalidSeparatorError();

    return numbers;
  }

  /**
   * 커스텀 구분자가 문자로만 이루어져 있는지 검증합니다.
   * @param {string[]} customSeparator - 커스텀 구분자
   * @returns {string[]}
   */
  static validateSeparators(customSeparator) {
    const isChar = (sep) => !(REGEXP.IS_ALL_NUMBER.test(sep));
    if (!customSeparator.every(isChar)) throw new InvalidCustomSeparatorError();

    return customSeparator;
  }
}

export default Input;
