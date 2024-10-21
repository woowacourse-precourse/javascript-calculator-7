import { escapeRegExp, checkDefaultFormat } from "./formatUtils";
import { DEFAULT_DELIMETER } from "../constants/constant";

export function calculate(input) {
  // 공백인 경우
  if (input.length === 0) return 0;

  // 커스텀 구분자가 존재하는 경우
  if (input.slice(0, 2) === "//" && input.slice(3, 5) === "\\n") {
    const customDelimiter = [...DEFAULT_DELIMETER, input[2]];
    let remain = input.slice(5);
    const changedEscapeDelimiters = customDelimiter.map(escapeRegExp);
    const cleanedRemain = remain.split(
      new RegExp(changedEscapeDelimiters.join("|"))
    );
    return cleanedRemain.reduce((sum, num) => sum + Number(num), 0);
  }

  // 그 외
  if (checkDefaultFormat(input)) {
    const cleanedInput = input.split(new RegExp(DEFAULT_DELIMETER.join("|")));
    return cleanedInput.reduce((sum, num) => sum + Number(num), 0);
  }
}
