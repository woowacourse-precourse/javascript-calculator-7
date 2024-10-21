import DelimiterHandler from "./DelimiterHandler.js";
import { CUSTOM_DELIMITER_START, CUSTOM_DELIMITER_END } from "./constant.js";

/**
 * 문자열을 구분자로 나누는 클래스
 */
class StringParser {
  constructor() {
    this.delimiter = new DelimiterHandler();
  }

  /**
   * 사용자로부터 입력받은 문자열을 구분자로 나누어 리스트로 반환
   * @param {string} input - 사용자로부터 입력받은 문자열
   * @returns {string[]} 구분자로 나눈 문자열 리스트
   * @throws 구분자 명령문이 잘못되었을 경우
   */
  parseString(input) {
    const delimiter = this.delimiter.extractDelimiter(input);
    let newString = input;

    if (input.startsWith(CUSTOM_DELIMITER_START)) {
      const newStringIndex =
        input.indexOf(CUSTOM_DELIMITER_END) + CUSTOM_DELIMITER_END.length;
      newString = input.substring(newStringIndex, input.length);
    }

    return newString.split(new RegExp(`[${delimiter.join("")}]`));
  }
}

export default StringParser;
