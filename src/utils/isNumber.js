import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { NUMBER_PATTERN } from "../constants/regexPatterns.js";
// 입력값이 숫자인지 확인하는 함수
// @param {string} input - 검사할 입력 문자열
//@throws {Error} 입력이 숫자가 아닐 경우 에러 발생
const isNumber = (input) => {
  if (!NUMBER_PATTERN.test(input)) throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
};

export default isNumber;
