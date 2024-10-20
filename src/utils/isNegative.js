import { ERROR_MESSAGES } from "../constants/errorMessages.js";
//입력값이 음수인지 확인하는 함수
//@param {string} input - 검사할 입력 문자열
//@throws {Error} 입력이 음수일 경우 에러 발생

const isNegative = (input) => {
  if (parseInt(input, 10) < 0) throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
};

export default isNegative;
