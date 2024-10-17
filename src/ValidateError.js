export class ValidateError {
  static validateNoWhitespace(input) {
    if (input.includes(' ')) throw new Error('공백이 포함되어 있습니다.');
  }
}
