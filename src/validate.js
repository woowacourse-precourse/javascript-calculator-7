import { ERROR_MESSAGES } from './errors.js';

export const validate = {
  // 숫자 형식 및 범위 검증
  numberValues(numberValues) {
    // 숫자가 아닌 입력 처리
    if (numberValues.some(isNaN)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
    }
    // 음수 입력 처리
    if (numberValues.some((num) => num < 0)) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_VALUE);
    }
    // 숫자 범위 초과
    if (numberValues.some((num) => num > Number.MAX_SAFE_INTEGER)) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  },

  // 구분자 및 알파벳 검증
  delimiters(input, customDelimiter = null) {
    let allowedDelimiters = [',', ':'];

    if (customDelimiter) {
      allowedDelimiters.push(customDelimiter);
    }

    // 알파벳이 포함된 경우 에러 발생
    if (/[a-zA-Z]/.test(input)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
    }

    // 구분자 검증
    const invalidChars = input.split('').filter((char) => {
      return (
        !/\d/.test(char) &&
        char !== '-' && // 음수 기호 '-'는 허용하지 않음
        !new RegExp(`[${allowedDelimiters.join('')}]`).test(char)
      );
    });

    // 허용되지 않은 구분자 사용
    if (invalidChars.length > 0) {
      throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);
    }
  },

  // 구분자 사이에 숫자가 없는 경우 검증
  emptyToken(tokens) {
    if (tokens.some((token) => token === '')) {
      throw new Error(ERROR_MESSAGES.EMPTY_TOKEN);
    }
  },

  // 커스텀 구분자 형식 검증
  customDelimiter(input) {
    const match = input.match(/^\/\/(.)\\n/);
    if (!match) {
      throw new Error(ERROR_MESSAGES.INVALID_CUSTOM_DELIMITER);
    }
    return match[1];
  },

  // 숫자 누락 검증
  missingNumber(numbersString) {
    if (!numbersString) {
      throw new Error(ERROR_MESSAGES.MISSING_NUMBER);
    }
  },
};
