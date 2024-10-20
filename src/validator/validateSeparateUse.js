const validateSeparteUse = (input) => {
  const hasMoreThanTwoNonNum = /[^0-9]{2,}/;
  const isDoubleSlash = /\/\/+/;

  // 숫자를 제외한 문자열이 2개 이상 연속되는 경우 (except for //)
  if (hasMoreThanTwoNonNum.test(input) && !isDoubleSlash.test(input)) {
    return false;
  }

  return true;
};

export default validateSeparteUse;
