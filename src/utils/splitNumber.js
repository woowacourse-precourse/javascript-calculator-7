import { ERROR_MESSAGES } from "../constants/errorMessages.js";

const splitNumber = (input) => {
  // 공백일 경우 0을 반환
  if (!input || input.trim() === "") {
    return [0];
  }

  const customDelimiterRegex = /^\/\/(.*)\\n(.*)$/;
  const match = input.match(customDelimiterRegex);

  let numbers;

  // 커스텀이 아닐 경우
  if (!match) {
    numbers = input.split(/[,:]/);
  }

  // 커스텀일 경우
  if (match) {
  }

  return numbers;
};

export default splitNumber;
