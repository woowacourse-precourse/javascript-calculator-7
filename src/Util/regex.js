function escapeRegExp(string) {
  // 정규식에 사용되는 모든 예약어들을 escape 처리한다. .*[]\ 등...
  // 원본 문자를 남기고 ($&), 그 문자에 \를 더 붙인다.
  // "Hello. How+are|you?" =>
  // "Hello\. How\+are\|you\?"
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildCustomInputValidationRegex(escapedDelimiter) {
  // 정수 또는 소수 패턴을 정의한다.
  const numberPattern = '\\d+(\\.\\d+)?';
  // escapedDelimiter를 사용하여 정규식을 동적으로 생성한다.
  return new RegExp(`^${numberPattern}(${escapedDelimiter}${numberPattern})*$`);
}

export { escapeRegExp, buildCustomInputValidationRegex };
