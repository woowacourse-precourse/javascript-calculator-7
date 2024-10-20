import CustomError from "../errors/CustomError.js";
import ERROR from "../errors/errors.js";

// 문자열이 빈 값인지 확인
export function checkEmptyString(input) {
  if (!input) {
    throw new CustomError(ERROR.EMPTY_STRING.message, ERROR.EMPTY_STRING.name);
  }
}

// 숫자 하나만 있는지 확인
export function checkSingleNumber(numberString) {
  return !isNaN(numberString) && numberString.trim() !== "";
}

// 기본 구분자가 포함되어 있는지 확인
export function checkForDefaultDelimiter(numberString) {
  const DEFAULT_DELIMITERS = /[,:]/g;
  if (!DEFAULT_DELIMITERS.test(numberString)) {
    throw new CustomError(
      ERROR.INVALID_INPUT.message,
      ERROR.INVALID_INPUT.name
    );
  }
}

// 설정한 커스텀 구분자와 입력한 구분자가 일치하는지 확인
export function checkForMismatchedDelimiter(numberString, customDelimiter) {
  if (!numberString.includes(customDelimiter)) {
    throw new CustomError(
      ERROR.MISMATCHED_DELIMITER.message,
      ERROR.MISMATCHED_DELIMITER.name
    );
  }
}

// 숫자 배열이 유효한지 확인
export function validateNumbers(numbers) {
  if (numbers.some(isNaN)) {
    throw new CustomError(ERROR.NOT_A_NUMBER.message, ERROR.NOT_A_NUMBER.name);
  }

  const negativeNumbers = numbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new CustomError(
      ERROR.NEGATIVE_NUMBER.message,
      ERROR.NEGATIVE_NUMBER.name
    );
  }
}
