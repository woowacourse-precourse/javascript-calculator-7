import Validator from "./Validator";

class Delimiters {
  constructor() {
    this.BASE_DELIMITER = [",", ":"];
    this.CUSTOM_DELIMITER_REGEX = /^\/\/(.+)\\n/; // 숫자 사용 불가
    this.validator = new Validator();
  }
  detect (input) {
    
    this.validator.validateInputFormat(input);

    const matchedDelimiter = input.match(this.CUSTOM_DELIMITER_REGEX);    
    
    if (!matchedDelimiter) {
      this.validator.validateDelimiter(input);
      return this.BASE_DELIMITER;
    }

    const customDelimiter = matchedDelimiter[1];
    this.validator.validateCustomDelimiter(customDelimiter);

    const uniqueDelimiters = new Set([customDelimiter, ...this.BASE_DELIMITER]) // 커스텀 구분자를 먼저 처리하도록
    return [...uniqueDelimiters];
  }
};

export default Delimiters;