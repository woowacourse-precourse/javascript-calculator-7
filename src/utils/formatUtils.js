import { DEFAULT_DELIMITER } from "../constants/constant";

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function isNumeric(str) {
  return /^\d+$/.test(str);
}

function cleanInput(input, delimiters) {
  let cleanedInput = input;
  delimiters.forEach((delimiter) => {
    cleanedInput = cleanedInput.replaceAll(delimiter, "");
  });
  return cleanedInput;
}

export function checkInputFormat(input) {
  let cleanedInput;

  if (input.slice(0, 2) === "//" && input.slice(3, 5) === "\\n") {
    const customDelimiter = [...DEFAULT_DELIMITER, input[2]];
    cleanedInput = cleanInput(input.slice(5), customDelimiter);
  } else {
    cleanedInput = cleanInput(input, DEFAULT_DELIMITER);
  }
  if (!isNumeric(cleanedInput)) {
    throw new Error("[ERROR] 입력 형식이 올바르지 않습니다");
  }
  return true;
}
