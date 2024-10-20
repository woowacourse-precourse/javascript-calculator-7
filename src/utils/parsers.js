// 커스텀 구분자 추출
export function extractCustomDelimiter(input) {
  const CUSTOM_DELIMITER_REGEX = /^\/\/(.+?)\\n/;
  const customDelimiterMatch = input.match(CUSTOM_DELIMITER_REGEX);
  return customDelimiterMatch ? customDelimiterMatch[1] : null;
}

// 숫자 문자열 추출
export function getNumberString(input, customDelimiter) {
  const CUSTOM_DELIMITER_REGEX = /^\/\/(.+?)\\n/;
  const customDelimiterLength = customDelimiter
    ? input.match(CUSTOM_DELIMITER_REGEX)[0].length
    : 0;
  return input.slice(customDelimiterLength).trim();
}

// 구분자로 문자열을 나누어 숫자 배열로 변환
export function parseNumbers(input, customDelimiter) {
  const DEFAULT_DELIMITERS = /[,:]/g;
  const delimiter = customDelimiter || DEFAULT_DELIMITERS;

  return input
    .split(delimiter)
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map(Number);
}
