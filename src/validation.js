import { ERROR_MESSAGE } from './constants.js';

// 잘못된 문자를 검사하는 함수
function isNumberValid(numbers) {
  for (const num of numbers) {
    if (isNaN(num)) {
      throw new Error(ERROR_MESSAGE + '잘못된 입력입니다.');
    }
  }
}

// 음수 검사 함수
function isNonNegative(numbers) {
  for (const num of numbers) {
    if (Number(num) < 0) {
      throw new Error(ERROR_MESSAGE + '음수는 입력할 수 없습니다.');
    }
  }
}

// 전체 유효성 검사를 하는 함수
function isValidateNumbers(numbers) {
  isNumberValid(numbers);
  isNonNegative(numbers);
}

export default isValidateNumbers;
