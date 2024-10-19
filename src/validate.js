import { ERROR_MESSAGES } from './errors.js';

// 숫자 형식 및 범위 검증
export function validateNumericValues(numericValues) {
  if (numericValues.some(isNaN)) {
    throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
  }
  if (numericValues.some((num) => num < 0)) {
    throw new Error(ERROR_MESSAGES.NEGATIVE_VALUE);
  }
  if (numericValues.some((num) => num > Number.MAX_SAFE_INTEGER)) {
    throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
  }
}

// 구분자 및 알파벳 검증
export function validateDelimiters(input, customDelimiter = null) {
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

  if (invalidChars.length > 0) {
    throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);
  }
}
