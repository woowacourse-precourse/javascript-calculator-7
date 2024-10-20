import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { throwError } from "../utils/throwError.js";

// 입력값이 없는 경우
const emptyInput = (input) => {
  if (!input) throwError(ERROR_MESSAGES.INPUT_NOT_FOUND);
  return input;
};

// 입력값에 음수가 있는 경우
const negativeInput = (input) => {
  if (/-\d/.test(input)) throwError(ERROR_MESSAGES.NEGATIVE_NUMBER);
  return input;
};

// "//"와 "\n" 사이에 문자가 없는 경우
const nullCustomDelimiter = (input) => {
  if (/^\/\/\\n/.test(input)) throwError(ERROR_MESSAGES.CUSTOM_DELIMITER_NULL);
  return input;
};

// 모든 검증 실행
export const validateInput = (input) => {
  const validators = [emptyInput, negativeInput, nullCustomDelimiter];

  validators.forEach((validator) => {
    validator(input);
  });

  return input;
};
