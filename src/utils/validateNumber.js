import { ERROR_MESSAGES } from "../constants/errorMessages.js";
/**
 * 문자열을 숫자로 변환하고 유효성 검사
 * @param {*} str
 * @returns
 */
const validateNumber = (str) => {
  const num = parseInt(str, 10);
  if (isNaN(num)) {
    throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
  }
  if (num < 0) {
    throw new Error(ERROR_MESSAGES.NOT_POSITIVE_NUMBER);
  }
  return num;
};

export default validateNumber;
