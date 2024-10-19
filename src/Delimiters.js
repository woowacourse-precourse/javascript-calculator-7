class Delimiters {
  BASE_DELIMITER = [",", ":"];
  CUSTOM_DELIMITER_REGEX = /^\/\/(.+)\n/; // 숫자 사용 불가
  detect (input) {
    const customDeli = input.match(this.CUSTOM_DELIMITER_REGEX);
    if (!customDeli) {
      return this.BASE_DELIMITER;
    }
    const uniqueDelimiters = new Set([customDeli[1], ...this.BASE_DELIMITER]) // 커스텀 구분자를 먼저 처리하도록
    return [...uniqueDelimiters];
  }
}

export default Delimiters;