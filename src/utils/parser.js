import { ERROR_MESSAGE } from "../constants/errorMessage.js";
import { DELIMITER_REGEX, REGEX_PATTERNS } from "../constants/regex.js";

/**
 * 문자열에서 구분자를 파싱하고, 숫자로 변환하는 클래스입니다.
 */
class Parser {
  /**
   * 입력 문자열에서 구분자를 파싱합니다.
   * 커스텀 구분자가 있을 경우 이를 사용하고, 없을 경우 기본 구분자를 사용합니다.
   * @param {string} inputValue - 파싱할 입력 문자열입니다.
   * @returns {{parsedString: string, delimiterRegex: RegExp}} 파싱된 문자열과 구분자 정규식 객체를 반환합니다.
   * @throws {Error} 커스텀 구분자가 잘못된 경우 오류를 발생시킵니다.
   */
  static parseDelimiter(inputValue) {
    if (DELIMITER_REGEX.CUSTOM.test(inputValue)) {
      const [matchedCustomDelimiterFormatString, customDelimiter] = inputValue.match(
        DELIMITER_REGEX.CUSTOM
      );

      this.validateCustomDelimiter(customDelimiter);

      const parsedString = inputValue.replace(matchedCustomDelimiterFormatString, ""); // 커스텀 구분자 형식 제거
      const delimiterRegex = new RegExp(
        customDelimiter.replace(REGEX_PATTERNS.META_CHARACTERS, "\\$&") // 정규식 메타 문자 이스케이프
      );

      // 커스텀 구분자를 사용하는 경우
      return { parsedString, delimiterRegex };
    }

    // 기본 구분자를 사용하는 경우
    return { parsedString: inputValue, delimiterRegex: DELIMITER_REGEX.DEFAULT };
  }

  /**
   * 구분자를 사용하여 value 값을 숫자 배열로 파싱합니다.
   * @param {string} value - 파싱할 문자열입니다.
   * @param {RegExp} delimiterRegex - 사용될 구분자 정규식입니다.
   * @returns {number[]} 파싱된 숫자 배열을 반환합니다.
   * @throws {Error} 유효하지 않은 피연산자가 있을 경우 오류를 발생시킵니다.
   */
  static parseOperands(value, delimiterRegex) {
    const operands = value.split(delimiterRegex).map(Number);
    this.validateOperands(operands);

    return operands;
  }

  /**
   * 커스텀 구분자의 유효성을 검증합니다.
   * @param {string} customDelimiter - 검증할 커스텀 구분자입니다.
   * @throws {Error} 커스텀 구분자가 유효하지 않을 경우 오류를 발생시킵니다.
   */
  static validateCustomDelimiter(customDelimiter) {
    if (!customDelimiter || REGEX_PATTERNS.SPACE.test(customDelimiter)) {
      throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER);
    }

    if (customDelimiter.length < 1) {
      throw new Error(ERROR_MESSAGE.CUSTOM_DELIMITER_TOO_SHORT);
    }

    if (!isNaN(Number(customDelimiter))) {
      throw new Error(ERROR_MESSAGE.CUSTOM_DELIMITER_IS_NUMBER);
    }
  }

  /**
   * 피연산자들의 유효성을 검증합니다.
   * @param {number[]} operands - 검증할 숫자 배열입니다.
   * @throws {Error} 유효하지 않은 피연산자가 있을 경우 오류를 발생시킵니다.
   */
  static validateOperands(operands) {
    if (operands.some((operand) => isNaN(operand))) {
      throw new Error(ERROR_MESSAGE.INVALID_OPERAND);
    }

    if (operands.some((operand) => operand < 0)) {
      throw new Error(ERROR_MESSAGE.NEGATIVE_OPERAND);
    }
  }
}

export default Parser;
