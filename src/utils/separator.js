import { CUSTOM_SEPARATOR } from "../constants/index.js";

export const extractCustomSeparators = (customString) => {
  // 커스텀 문자열이 없다면 빈 배열 early return
  if (customString === "") {
    return [];
  }

  const matches = customString.matchAll(CUSTOM_SEPARATOR);
  return Array.from(matches, (match) => match[1]);
};

export const mergeSeparators = (...separators) => {
  return [...separators];
};

export const convertRegExp = (pattern, flag) => {
  return new RegExp(pattern, flag);
};
