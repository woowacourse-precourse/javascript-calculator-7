import validateInput from "./validateinput.js";

function extractSeparator(input) {
  if (input.startsWith("//")) {
    const SEPARATORENDINDEX = input.indexOf("\n");
    if (SEPARATORENDINDEX !== -1) {
      return input.substring(2, SEPARATORENDINDEX);
    }
  }
  return /[,:]/;
}

function extractNumbers(input) {
  if (!validateInput(input)) {
    return [0]; //필요할 시 처리
  }

  if (!input) return [0]; // 빈 입력일 경우 0을 반환

  const SEPARATOR = extractSeparator(input);
  let NUMBERS = input;

  // 커스텀 구분자 처리
  if (input.startsWith("//")) {
    const SEPARATORENDINDEX = input.indexOf("\n");
    NUMBERS = input.substring(SEPARATORENDINDEX + 1);
  }

  // 커스텀 구분자가 있는 경우에만 이스케이프 처리
  const escapedSeparator =
    typeof SEPARATOR === "string"
      ? SEPARATOR.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      : SEPARATOR;

  const result = NUMBERS.split(new RegExp(`[${escapedSeparator}]`)).map(Number);

  // 결과 배열이 빈 배열이면 0을 반환
  return result.length === 0 ? [0] : result;
}

export default extractNumbers;
