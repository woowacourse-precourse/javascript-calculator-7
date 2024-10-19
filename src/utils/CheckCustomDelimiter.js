import Errors from "../constants/Errors.js";

/**
 * 커스텀 구분자를 확인합니다.
 * @param {string} input
 * @returns string | boolean
 */
const checkCustomDelimiter = (input) => {
  if (input.startsWith("//")) {
    if (input.includes("\\n")) {
      const CUSTOM_DELIMITER = input.slice(2, input.indexOf("\\n"));
      return CUSTOM_DELIMITER;
    }
    throw new Error(Errors.WRONG_CUSTOM_DELIMITER);
  }

  return false;
};

export default checkCustomDelimiter;
