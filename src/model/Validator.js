import { Console } from '@woowacourse/mission-utils';
import { EMPTY_INPUT_SUM } from '../constants/constants.js';

class Validator {
  static validateInputChars(input) {
    if (!input || input.trim() === '') {
      return EMPTY_INPUT_SUM;
    }
    const invalidChars = /[^0-9,:]/;
    if (invalidChars.test(input)) {
      throw new Error('[ERROR] 잘못된 문자가 포함되어 있습니다.');
    }
  }
  static validateIsNumber(input) {
    if (
      !Array.isArray(input) ||
      input.some((num) => typeof num !== 'number' || isNaN(num))
    ) {
      throw new Error('[ERROR] 숫자가 포함되어 있지 않습니다.');
    }
  }
  static validateInputCharsWithCustomDelim(input) {
    if (input.includes('\\n')) {
      const delimiterPart = input.substring(2, input.indexOf('\\n') - 1);
      if (delimiterPart.length > 1) {
        throw new Error('[ERROR] 커스텀 구분자는 문자여야합니다.');
      }
    } else {
      throw new Error('[ERROR] 커스텀 구분자의 형식이 잘못되었습니다.');
    }
  }
  static validateNumAfterCustomDelim(cleanInput, delimiter) {
    const invalidChars = new RegExp(`[^0-9${delimiter.source}]`);
    if (invalidChars.test(cleanInput)) {
      throw new Error('[ERROR] 잘못된 문자가 포함되어 있습니다.');
    }
  }
}
export default Validator;
