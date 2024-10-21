import { throwError } from './utils.js';
import { ERROR_MESSAGE } from './constants.js'; 

const validateEmptyInput = (input) => {
  if (input.trim() === '') {
    throwError(ERROR_MESSAGE.EMPTY_INPUT);
  }
};

const validateNegativeNumbers = (numbersArray) => {
  const hasNegative = numbersArray.some((number) => Number(number) < 0);
  if (hasNegative) {
    throwError(ERROR_MESSAGE.NEGATIVE_INPUT);
  }
};

const validateInvalidNumbers = (numbersArray) => {
  const hasInvalid = numbersArray.some((number) => isNaN(Number(number)) || number.trim() === '');
  if (hasInvalid) {
    throwError(ERROR_MESSAGE.INVALID_INPUT);
  }
};

export {
  validateEmptyInput,
  validateNegativeNumbers,
  validateInvalidNumbers,
};
