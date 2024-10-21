// 정수 또는 소수를 매칭하는 정규식 패턴:
// - `\\d+`는 하나 이상의 숫자(정수 부분)를 매칭.
// - `(\\.\\d+)?`는 선택적으로 소수점과 그 뒤에 하나 이상의 숫자(소수 부분)를 매칭.
// 따라서, 이 패턴은 정수(예: 42)와 소수(예: 42.5) 모두를 매칭할 수 있습니다.
const numberPattern = '\\d+(\\.\\d+)?';

//  정규식에 사용되는 예약어
const specialCharsPattern = /[.*+?^${}()|[\]\\]/g;

function escapeRegExp(string) {
  // 정규식에 사용되는 모든 예약어들을 escape 처리한다. .*[]\ 등...
  // 원본 문자를 남기고 ($&), 그 문자에 \를 더 붙인다.
  // "Hello. How+are|you?" =>
  // "Hello\. How\+are\|you\?"
  return string.replace(specialCharsPattern, '\\$&');
}

function buildNormalInputValidationRegex() {
  return new RegExp(`^${numberPattern}$`);
}

function buildCustomInputValidationRegex(escapedDelimiter) {
  // escapedDelimiter를 포함하여 동적으로 정규식을 생성
  return new RegExp(`^${numberPattern}(${escapedDelimiter}${numberPattern})*$`);
}

export {
  escapeRegExp,
  buildCustomInputValidationRegex,
  buildNormalInputValidationRegex,
};
