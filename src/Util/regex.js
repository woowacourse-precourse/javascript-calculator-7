const numberPattern = '\\d+(\\.\\d+)?';

function escapeRegExp(string) {
  // 정규식에 사용되는 모든 예약어들을 escape 처리한다. .*[]\ 등...
  // 원본 문자를 남기고 ($&), 그 문자에 \를 더 붙인다.
  // "Hello. How+are|you?" =>
  // "Hello\. How\+are\|you\?"
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
