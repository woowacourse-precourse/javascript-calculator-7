/**
 * 문자열을 구분자로 나누는 클래스
 */
class StringParser {
  /**
   * 사용자로부터 입력받은 문자열을 구분자로 나누어 리스트로 반환
   * @param {string} input - 사용자로부터 입력받은 문자열
   * @returns {string[]} 구분자로 나눈 문자열 리스트
   */
  parseString(input) {
    const delemeter = [",", ":"];
    return input.split(new RegExp(`[${delemeter.join("")}]`));
  }
}

export default StringParser;
