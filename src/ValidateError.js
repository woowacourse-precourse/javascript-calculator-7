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
}
