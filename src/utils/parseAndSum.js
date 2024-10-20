import isNumber from "./isNumber.js";
import sumNumbers from "./sumNumbers.js";
import isNegative from "./isNegative.js";
import { DEFAULT_DELIMITER_PATTERN } from "../constants/regexPatterns.js";
// 문자열을 파싱하고 숫자의 합을 계산하는 함수
//  @param {string} str - 파싱할 문자열
//  @param {string|RegExp} delimiter - 사용할 구분자
//  @returns {number} 합계 또는 단일 숫자
//  @throws {Error} 파싱 또는 계산 중 오류 발생 시

const parseAndSum = (str, delimiter) => {
  // 구분자를 이용해 문자열 분할
  const parts =
    typeof delimiter === "string"
      ? str.split(delimiter)
      : str.split(DEFAULT_DELIMITER_PATTERN);
  const trimmedParts = parts.map((part) => part.trim());

  // 각 부분을 숫자로 변환하고 유효성 검사
  const numbers = trimmedParts.map((part) => {
    isNumber(part);
    isNegative(part);
    return parseInt(part, 10);
  });

  // 숫자가 하나만 있는 경우 해당 숫자 반환
  if (numbers.length === 1) {
    return numbers[0];
  }

  // 숫자들의 합 계산 및 반환
  return sumNumbers(numbers);
};

export default parseAndSum;
