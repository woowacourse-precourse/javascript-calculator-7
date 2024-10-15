import { CUSTOM_SEPARATOR, MESSAGES } from "../constants/index.js";

const DIGIT_REGEXP = /[0-9]/;

export const parseUserInput = (userInput) => {
  // 처음 숫자가 나온 인덱스를 기준으로 문자열을 나눈다.
  const findNumberIndex = userInput.search(DIGIT_REGEXP);
  const customString = userInput.slice(0, findNumberIndex);
  const numberString = userInput.slice(findNumberIndex);

  return { customString, numberString };
};

export const getCustomSeparator = (customString) => {
  // 커스텀 문자열이 없다면 early return
  if (customString === "") {
    return;
  }

  const matches = customString.matchAll(CUSTOM_SEPARATOR);
  const results = Array.from(matches, (match) => match[1]);

  // 커스텀 문자열이 있는데 형식이 맞지 않다면 예외 처리
  if (results.length === 0) {
    throw new Error(MESSAGES.INVALID_CUSTOM_SEPARATOR);
  }

  return results;
};
