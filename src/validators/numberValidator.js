import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { throwError } from "../utils/throwError.js";

// 숫자인지 검증
export const isNumber = (value) => {
  if (isNaN(value)) return false;
  return true;
};

export const validateNumbers = (nums) => {
  nums.forEach((n) => {
    if (!isNumber(n)) throwError(ERROR_MESSAGES.INVALID_NUMBER);
  });
};
