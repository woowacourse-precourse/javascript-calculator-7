const FindDigitCount = (str) => {
  const DIGITS = str.match(/\d+/g);

  if (DIGITS == null) {
    throw new Error(`[ERROR] 숫자가 최소 한 개 이상 필요합니다.`);
  }

  if (DIGITS.length === 1 && str[0] === '-') {
    throw new Error(`[ERROR] 음수는 문자열에 포함될 수 없습니다.`);
  }

  return DIGITS.length;
};

export default FindDigitCount;
