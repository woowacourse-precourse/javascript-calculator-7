import isEmpty from "./isEmpty.js";
import isValidDelimiter from "./isValidDelimiter.js";
import parseAndSum from "./parseAndSum.js";
import { CUSTOM_DELIMITER_PATTERN } from "../constants/regexPatterns.js";
//  입력 문자열을 검증하고 숫자의 합을 계산하는 메인 함수
//  @param {string} input - 검증 및 계산할 입력 문자열
//  @returns {number} 계산된 합계 또는 단일 숫자
//  @throws {Error} 검증 실패 또는 계산 중 오류 발생 시

const calculator = (input) => {
  // 입력값이 비어있는지 확인
  isEmpty(input);

  // 커스텀 구분자 패턴 확인
  const match = input.match(CUSTOM_DELIMITER_PATTERN);

  if (match) {
    // 커스텀 구분자 사용 케이스
    const [, delimiter, rest] = match;
    isValidDelimiter(delimiter);
    return parseAndSum(rest, delimiter);
  } else {
    // 기본 구분자 사용 케이스
    return parseAndSum(input);
  }
};

export default calculator;
