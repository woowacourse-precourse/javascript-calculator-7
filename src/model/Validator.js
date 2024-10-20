import { Console } from '@woowacourse/mission-utils';

class Validator {
  static validateInputChars(input) {
    const invalidChars = /[^0-9,:]/;
    if (invalidChars.test(input)) {
      throw new Error('[ERROR] 잘못된 문자가 포함되어 있습니다.');
    }
  }
  static validateInputCharsWithCustomDelim(input, delimiter) {
    const invalidChars = new RegExp(`[^0-9${delimiter}]\\n`);
    if (invalidChars.test(input)) {
      throw new Error('[ERROR] 잘못된 문자가 포함되어 있습니다.');
    }
  }
  static validateNumAfterCustomDelim(input) {
    const cleanInput = input.split('\\n')[1];

    if (input.includes('\\n')) {
      const delimiterPart = input.substring(2, input.indexOf('\\n') - 1);
      if (delimiterPart.length > 1) {
        throw new Error('[ERROR] 커스텀 구분자는 문자여야합니다.');
      }

      if (!cleanInput || cleanInput.trim() === '') {
        return 0;
      } else {
        const invalidDelimiter = new RegExp(`[^0-9${delimiterPart}]`);
        if (invalidDelimiter.test(cleanInput)) {
          throw new Error('[ERROR] 커스텀 구분자 외의 구분자가 발견되었습니다');
        }
      }
    } else {
      throw new Error('[ERROR] 커스텀 구분자의 형식이 잘못되었습니다.');
    }
  }
}
export default Validator;
