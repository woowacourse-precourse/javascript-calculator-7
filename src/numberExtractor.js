import { CUSTOM_DELIMITER, DEFAULT_DELIMITER } from './constants.js';

// 숫자를 추출하는 함수
function extractNumbers(input) {
  if (!input) return [0];

  const customDelimiterMatch = input.match(CUSTOM_DELIMITER);
  let numbers;

  if (customDelimiterMatch) {
    const customDelimiter = new RegExp(customDelimiterMatch[1], 'g');
    numbers = input.split(customDelimiterMatch[0])[1].split(customDelimiter);
  } else {
    numbers = input.split(DEFAULT_DELIMITER);
  }

  return numbers.map(Number);
}

export default extractNumbers;
