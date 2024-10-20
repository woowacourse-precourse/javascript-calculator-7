function hasInvalidSeparator(element, customSeparator) {
  return (
    element !== ',' &&
    element !== ':' &&
    element !== customSeparator &&
    isNaN(element)
  );
}

export function verifyCustomSeparator(customSeparator) {
  if (!isNaN(customSeparator)) {
    throw new Error('[ERROR] 커스텀 구분자를 문자로 입력해 주세요.');
  }
}

export function verifyInvalidSeparator(arrValue, customSeparator) {
  arrValue.forEach((element) => {
    if (hasInvalidSeparator(element, customSeparator)) {
      throw new Error(
        '[ERROR] 커스텀 구분자와 쉼표(,), 콜론(:) 이외의 문자를 입력할 수 없습니다.'
      );
    }
  });
}

export function verifyInvalidNumber(arrValue) {
  const hasNegativeNumber = arrValue.some((element) => element < 0);
  if (hasNegativeNumber) {
    throw new Error('[ERROR] 덧셈할 숫자로 양수를 입력해 주세요.');
  }
}
