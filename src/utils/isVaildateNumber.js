const isVaildateNumber = function isVaildateNumberFunc(number) {
  const maxSafeInteger = Number.MAX_SAFE_INTEGER;

  if (Number.isNaN(number) || number > maxSafeInteger) {
    throw new Error('[ERROR] 유효한 숫자가 아닙니다.');
  }
};

export default isVaildateNumber;
