import { ERROR_MESSAGES } from "../constants/errorMessages.js";

//  입력값이 비어있는지 확인하는 함수
//  @param {string} input - 검사할 입력 문자열
//  @throws {Error} 입력이 비어있을 경우 에러 발생

const isEmpty = (input) => {
  if (!input || input.trim() === "")
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
};

export default isEmpty;
