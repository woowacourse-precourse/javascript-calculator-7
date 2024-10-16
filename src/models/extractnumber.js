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
  if (!input) return [];

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

  return NUMBERS.split(new RegExp(`[${escapedSeparator}]`)).map(Number);
}

export default extractNumbers;
