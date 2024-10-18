import { MissionUtils } from '@woowacourse/mission-utils';

// 에러 처리
export function errorMessage(booleanData) {
  if (booleanData === 1) {
    throw new Error('구분자가 아닌 문자는 입력할 수 없습니다.');
  }
  if (booleanData === 2) {
    throw new Error('0은 입력할 수 없습니다.');
  }
}

// 양수가 아닌게 있는 경우 예외
export function hasNonNumericError(input) {
  const nonNumeric = input.map(Number).some((char) => !/^\d+$/.test(char))
    ? 1
    : false; // 문자가 아닌 값이 하나라도 있으면 true
  errorMessage(nonNumeric);
}

// 0이 있는 경우 예외
export function hasZeroError(input) {
  const hasZero = input.some((char) => char === '0') ? 2 : false; // 0이 하나라도 있으면 true
  errorMessage(hasZero);
}

// 예외처리 모음 함수
export function validateInput(input) {
  // string배열 받음
  // 양수나 0dl 아닌게 있는 경우
  hasNonNumericError(input);
  // 0이 있는 경우
  hasZeroError(input);
}

// 숫자 파싱 함수
export function parseNumbers(input) {
  const delimiter = /,|:/; // 기본구분자

  // 커스텀 구분자 추출
  const customDelimiter = input.startsWith('//')
    ? input.substring(2, input.indexOf('\\n'))
    : null;
  // 커스텀 부분 제외한 문자열
  const processedInput = customDelimiter
    ? input.substring(input.indexOf('\\n') + 2)
    : input;

  // 커스텀 구분자로 나눈 문자 배열 (split 하면 배열로 만들어짐. )
  const splitByCustomDelimiter = customDelimiter
    ? processedInput.split(customDelimiter)
    : [processedInput];

  // 기본 구분자로 나눈 문자 배열
  const splitByDefaultDelimiters = splitByCustomDelimiter.flatMap((part) =>
    part.split(delimiter),
  );

  /// 예외처리 로직
  validateInput(splitByDefaultDelimiters);

  // 빈 문자열이 있으면 '0'으로 대체
  const cleanedNumbers = splitByDefaultDelimiters.map((value) =>
    value === '' ? '0' : value,
  );
  MissionUtils.Console.print(input.indexOf('\\n'));

  MissionUtils.Console.print(splitByDefaultDelimiters);
  MissionUtils.Console.print(cleanedNumbers.map(Number));

  return cleanedNumbers.map(Number);
}
