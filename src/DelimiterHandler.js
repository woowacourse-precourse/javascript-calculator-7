import {
  DEFAULT_DELIMITER,
  CUSTOM_DELIMITER_START,
  CUSTOM_DELIMITER_END,
} from "./constant.js";

/**
 * 사용자로부터 입력받은 문자열에서 구분자를 추출하는 클래스
 */
class DelimiterHandler {
  constructor() {
    this.delimiter = DEFAULT_DELIMITER;
  }

  /**
   * 사용자로부터 입력받은 문자열에서 구분자를 추출
   * @param {*} input 사용자로부터 입력받은 문자열
   * @returns {string[]} 추출한 구분자 리스트
   */
  extractDelimiter(input) {
    if (input.startsWith(CUSTOM_DELIMITER_START)) {
      const endIndex = input.indexOf(CUSTOM_DELIMITER_END);
      const customDelimiter = input.substring(2, endIndex);
      this.delimiter = this.delimiter.concat(customDelimiter.split(""));
    }

    return this.delimiter;
  }
}

export default DelimiterHandler;
