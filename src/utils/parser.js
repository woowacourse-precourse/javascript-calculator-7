const DEFAULT_DELIMITER_REGEX = /,|:/;
const CUSTOM_DELIMITER_REGEX = /^\/\/([\s\S]*?)\\n/;
const SPACE_REGEX = /\s/;
const REGEX_META_CHARACTERS = /[-\/\\^$*+?.()|[\]{}]/g;

class Parser {
  // 구분자를 파싱하고 기본/커스텀 구분자에 따라 문자열을 파싱하는 메서드
  static parseDelimiter(inputValue) {
    if (CUSTOM_DELIMITER_REGEX.test(inputValue)) {
      const [matchedCustomDelimiterFormatString, customDelimiter] =
        inputValue.match(CUSTOM_DELIMITER_REGEX);

      this.validateCustomDelimiter(customDelimiter);

      const parsedString = inputValue.replace(matchedCustomDelimiterFormatString, ''); // 커스텀 구분자 형식 제거
      const delimiterRegex = new RegExp(customDelimiter.replace(REGEX_META_CHARACTERS, '\\$&')); // 정규식 메타 문자 이스케이프

      return { parsedString, delimiterRegex };
    }

    // 기본 구분자를 사용하는 경우
    return { parsedString: inputValue, delimiterRegex: DEFAULT_DELIMITER_REGEX };
  }

  // 문자열을 구분자에 따라 숫자로 파싱하는 메서드
  static parseOperands(value, delimiterRegex) {
    const operands = value.split(delimiterRegex).map(Number);

    this.validateOperands(operands);

    return operands;
  }

  // 커스텀 구분자 검증 메서드
  static validateCustomDelimiter(customDelimiter) {
    if (!customDelimiter || SPACE_REGEX.test(customDelimiter)) {
      throw new Error('[ERROR] 커스텀 구분자가 입력되지 않았습니다.');
    }

    if (customDelimiter.length < 1) {
      throw new Error('[ERROR] 커스텀 구분자는 1글자 이상 가능합니다.');
    }

    if (!isNaN(Number(customDelimiter))) {
      throw new Error('[ERROR] 커스텀 구분자로 숫자를 사용할 수 없습니다.');
    }
  }

  // 피연산자 검증 메서드
  static validateOperands(operands) {
    if (operands.some((operand) => isNaN(operand))) {
      throw new Error('[ERROR] 숫자가 아닌 피연산자가 포함되어 있습니다.');
    }

    if (operands.some((operand) => operand < 0)) {
      throw new Error('[ERROR] 음수 피연산자는 허용되지 않습니다.');
    }
  }
}

export default Parser;
