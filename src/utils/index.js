import { CUSTOM_SEPARATOR } from "../constants/index.js";

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
  return Array.from(matches, (match) => match[1]);
};
