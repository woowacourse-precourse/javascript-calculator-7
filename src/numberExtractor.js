import { CUSTOM_DELIMITER, DEFAULT_DELIMITER } from './constants.js';

// 커스텀 구분자를 사용하여 숫자를 추출하는 함수
function extractWithCustomDelimiter(input, customDelimiterMatch) {
  const customDelimiter = new RegExp(customDelimiterMatch[1], 'g');
  return input
    .split(customDelimiterMatch[0])[1]
    .split(customDelimiter)
    .map(Number);
}

// 기본 구분자를 사용하여 숫자를 추출하는 함수
function extractWithDefaultDelimiter(input) {
  return input.split(DEFAULT_DELIMITER).map(Number);
}

// 전체 숫자를 추출하는 함수
function extractNumbers(input) {
  if (!input) return [0];

  const customDelimiterMatch = input.match(CUSTOM_DELIMITER);

  if (customDelimiterMatch) {
    return extractWithCustomDelimiter(input, customDelimiterMatch);
  } else {
    return extractWithDefaultDelimiter(input);
  }
}

export default extractNumbers;
