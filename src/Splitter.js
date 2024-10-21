import CustomSepatator from "./CustomSeparator.js";
import validator from "./Validator.js";

class Splitter {
  #separator = [",", ":"];

  /**
   * @public
   * @param { String } string - 분할할 문자열
   * @returns { Array<Number> } - 문자열을 구분자로 분할한 후 숫자로 변환한 결과
   */
  split(string) {
    if (CustomSepatator.hasPattern(string)) {
      validator.validateCustomSeparator(string);
      this.#separator = [...CustomSepatator.extractSeparator(string)];
      return this.#splitAndConvertToNumbers(
        CustomSepatator.removePattern(string)
      );
    }
    return this.#splitAndConvertToNumbers(string);
  }

  /**
   * @private
   * @param { String } string - 분할할 문자열
   * @returns { Array<Number> } - 문자열을 구분자로 분할한 후 숫자로 변환한 결과
   */
  #splitAndConvertToNumbers(string) {
    const splittedResult = this.#splitBySeparator(string);
    return Splitter.#convertToNumber(splittedResult);
  }

  /**
   * @private
   * @param { String } string - 분할할 문자열
   * @returns { Array<String> } - 문자열을 구분자로 분할한 결과
   */
  #splitBySeparator(string) {
    const splitRegex = new RegExp(`[${this.#separator.join("")}]`);
    return string.split(splitRegex);
  }

  /**
   * @private
   * @static
   * @param { Array<String> } splittedResult - 분할된 문자열
   * @returns { Array<Number> } - 각 문자열을 숫자로 변환한 결과
   * @description
   * - 빈 문자열은 0으로 변환
   * - 숫자로 변환할 수 없는 문자열은 NaN으로 변환
   * - 소수, 지수표기법은 NaN으로 변환
   * */
  static #convertToNumber(splittedResult) {
    return splittedResult.map((element) => {
      if (element === "") return 0;
      const converted = parseInt(element, 10);
      return element !== converted.toString() ? NaN : converted; // "1" -> 1, "1.1" -> NaN, "14e1" -> NaN
    });
  }
}

export default Splitter;
