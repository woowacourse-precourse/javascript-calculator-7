export class ValidateError {
  static validateCustomDelimiterFormat(input) {
    const customDelimiterPattern = /^\/\/.\n/;
    if (!customDelimiterPattern.test(input)) {
      throw new Error('커스텀 구분자 지정 형식이 잘못되었습니다');
    }
  }
  static validateNoWhitespace(input) {
    if (input.includes(' ')) throw new Error('공백이 포함되어 있습니다.');
  }
  static validateNoNegativeNumbers(values) {
    const hasNegativeNumbers = values.some((value) => Number(value) < 0);
    if (hasNegativeNumbers) {
      throw new Error(`음수가 포함되어 있습니다.`);
    }
  }
  static validateAllowedDelimiters(values) {
    for (let value of values) {
      if (isNaN(Number(value))) {
        throw new Error(`올바른 구분자를 사용하지 않았습니다: ${value}`);
      }
    }
  }
  static validateNonEmptySplitValues(values) {
    for (let value of values) {
      if (value === '') {
        throw new Error('구분자 주위에 빈 값이 존재합니다.');
      }
    }
  }
}
