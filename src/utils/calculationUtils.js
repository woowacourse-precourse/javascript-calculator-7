import { escapeRegExp } from "./formatUtils";
import { DEFAULT_DELIMITER } from "../constants/constant";

function splitInput(input, delimiters) {
  const escapedDelimiters = delimiters.map(escapeRegExp);
  const regex = new RegExp(escapedDelimiters.join("|"));
  return input.split(regex);
}

function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}

export function calculate(input) {
  // 공백인 경우
  if (input.length === 0) return 0;

  // 커스텀 구분자가 존재하는 경우
  if (input.slice(0, 2) === "//" && input.slice(3, 5) === "\\n") {
    const customDelimiter = [...DEFAULT_DELIMITER, input[2]];
    const splitNumbers = splitInput(input.slice(5), customDelimiter);
    return sumNumbers(splitNumbers);
  }

  // 그 외
  const splitNumbers = splitInput(input, DEFAULT_DELIMITER);
  return sumNumbers(splitNumbers);
}
