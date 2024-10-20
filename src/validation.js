import { ERROR_MESSAGE } from './constants.js';

function isValidateNumbers(numbers) {
  for (const num of numbers) {
    if (isNaN(num) || Number(num) < 0) {
      throw new Error(ERROR_MESSAGE + '잘못 입력하였습니다.');
    }
  }
}

export default isValidateNumbers;
