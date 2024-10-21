import { ERROR_MESSAGE } from "./message.js";
import { separatingStrings, convertToNumbers } from "./parser.js";

export function validateSpecialCharactersInString(string, separator) {
  const isTwoSeparators = typeof separator === "object";

  let invalidSpecialCharRegex;

  if (isTwoSeparators) {
    const [comma, semicolon] = separator;
    invalidSpecialCharRegex = new RegExp(
      `^[-${comma}${semicolon}ㄱ-ㅎ가-힣a-zA-Z0-9]+$`
    );
  }
  if (!isTwoSeparators) {
    invalidSpecialCharRegex = new RegExp(
      `^[-${separator}ㄱ-ㅎ가-힣a-zA-Z0-9]+$`
    );
  }

  const isValid = invalidSpecialCharRegex.test(string);
  if (isValid) return separatingStrings(string, separator);
  if (!isValid) throw new Error(ERROR_MESSAGE.INVALID_SPECIAL_CHAR_MESSAGE);
}

export function validateNumericInput(separatedString) {
  const numericOnlyRegex = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;
  const isValid = separatedString.every((el) => !numericOnlyRegex.test(el));
  if (isValid) return convertToNumbers(separatedString);
  if (!isValid) throw new Error(ERROR_MESSAGE.NUMERIC_ONLY);
}

export function hasSeparator(input, separator) {
  return input.includes(separator);
}

export function hasNegativeNumber(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < 0) return true;
  }
}
