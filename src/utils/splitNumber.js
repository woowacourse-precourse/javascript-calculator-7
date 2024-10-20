import { ERROR_MESSAGES } from "../constants/errorMessages.js";

const validateCustomDelimiter = (delimiter) => {
  if (delimiter === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_DELIMITER);
  }
  if (/\d/.test(delimiter)) {
    throw new Error(ERROR_MESSAGES.INVALID_SPLITTER);
  }
};

const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const splitNumber = (input) => {
  console.log("Input:", input);
  // 공백일 경우 0을 반환
  if (!input || input.trim() === "") {
    return [0];
  }

  const customDelimiterRegex = /^\/\/([^\n]*)\n(.*)$/;
  const match = input.match(customDelimiterRegex);

  // 커스텀이 아닐 경우
  if (!match) {
    return input.split(/[,:]/);
  }
  if (match) {
    const [, customDelimiter, numbersString] = match;
    validateCustomDelimiter(customDelimiter);
    const escapedDelimiter = escapeRegExp(customDelimiter);
    return numbersString.split(new RegExp(escapedDelimiter));
  }
};

splitNumber();

export default splitNumber;
