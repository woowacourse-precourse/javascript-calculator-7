import { DEFAULT_DELIMETER } from "../constants/constant";

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function isNumeric(str) {
  return /^\d+$/.test(str);
}

export function checkDefaultFormat(input) {
  let cleanedInput = input;
  DEFAULT_DELIMETER.forEach((delimiter) => {
    cleanedInput = cleanedInput.replaceAll(delimiter, "");
  });
  if (!isNumeric(cleanedInput)) {
    throw new Error("[ERROR] 입력 형식이 올바르지 않습니다");
  }
  return true;
}

export function checkInputFormat(input) {
  if (input.slice(0, 2) === "//" && input.slice(3, 5) === "\\n") {
    const customDelimiter = [...DEFAULT_DELIMETER, input[2]];
    let remain = input.slice(5);
    customDelimiter.forEach((delimiter) => {
      remain = remain.replaceAll(delimiter, "");
    });
    if (!isNumeric(remain)) {
      throw new Error("[ERROR] 입력 형식이 올바르지 않습니다");
    }
    return true;
  }

  return checkDefaultFormat(input, DEFAULT_DELIMETER);
}
