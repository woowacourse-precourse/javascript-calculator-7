import { ERROR_MESSAGES } from "../constants/errorMessages.js";

const validateCustomDelimiter = (delimiter) => {
  if (/\d/.test(delimiter)) {
    throw new Error(ERROR_MESSAGES.INVALID_SPLITTER);
  }
};

const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

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
    const [, customDelimiter, numbersString] = match;
    validateCustomDelimiter(customDelimiter);
    if (customDelimiter === "") {
      numbers = [numbersString];
    } else {
      const escapedDelimiter = escapeRegExp(customDelimiter);
      const splitRegex = new RegExp(`[,:]|${escapedDelimiter}`);
      numbers = numbersString.split(splitRegex);
    }
  }

  return numbers;
};

export default splitNumber;
