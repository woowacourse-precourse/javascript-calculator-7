class Delimiters {
  BASE_DELIMITER = [",", ":"];
  CUSTOM_DELIMITER_REGEX = /^\/\/(.+)\n/; // 숫자 사용 불가
  detect (input) {
    const customDeli = input.match(this.CUSTOM_DELIMITER_REGEX);
    if (!customDeli) {
      return this.BASE_DELIMITER;
    }
    const uniqueDelimiters = new Set([...this.BASE_DELIMITER, customDeli[1]])
    return [...uniqueDelimiters];
  }
}

export default Delimiters;