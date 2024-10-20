import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { DELIMITER_WITH_NUMBER_PATTERN } from "../constants/regexPatterns.js";

//구분자의 유효성을 검사하는 함수
//@param {string} delimiter - 검사할 구분자
//@throws {Error} 구분자가 유효하지 않을 경우 에러 발생

const isValidDelimiter = (delimiter) => {
  if (delimiter.length === 0 || DELIMITER_WITH_NUMBER_PATTERN.test(delimiter))
    throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);
};
export default isValidDelimiter;
