import { OPTIONS } from '../constant.js';
import ValidationError from '../error/ValidationError.js';

export function isValidDelimiterLength(string) {
  if (string.length > OPTIONS.MAX_CUSTOM_DELIMITER_LENGTH) {
    throw new ValidationError(
      `커스텀 구분자의 길이는 ${OPTIONS.MAX_CUSTOM_DELIMITER_LENGTH}자 이하여야 합니다.`
    );
  }
}

export function isValidNumberArray(numberArr) {
  const numberRegExp = new RegExp('[0-9]');

  numberArr.forEach((val) => {
    if (!numberRegExp.test(val)) {
      throw new ValidationError('입력 양식이 올바르지 않습니다.');
    }
  });
}
