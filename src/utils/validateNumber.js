import { ERROR_MESSAGES } from "../constants/errorMessages.js";

/**
 * 문자열을 숫자로 변환하고 유효성 검사
 * @param {string} str
 * @returns {number}
 */
const validateNumber = (str) => {
  console.log(str);
  const trimmedStr = str.trim();
  if (trimmedStr === "") {
    throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
  }
  if (!/^-?\d+$/.test(trimmedStr)) {
    throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
  }

  const num = parseInt(trimmedStr, 10);

  if (num < 0) {
    throw new Error(ERROR_MESSAGES.NOT_POSITIVE_NUMBER);
  }

  return num;
};

export default validateNumber;
