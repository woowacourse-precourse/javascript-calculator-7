import { ERROR_FORMAT } from "../utils/error.constants.js";

const checkIsNumber = (target) => {
  if (isNaN(target)) {
    throw new Error(ERROR_FORMAT.IS_NUMBER);
  }
};

const checkIsPositiveNumber = (target) => {
  if (target <= 0) {
    throw new Error(ERROR_FORMAT.IS_POSITIVE_NUMBER);
  }
};

export const checkInputValidation = (array) => {
  for (let i = 0; i < array.length; i++) {
    const target = array[i];
    checkIsNumber(target);
    checkIsPositiveNumber(target);
  }
};
