function hasInvalidSeparator(element, customSeparator) {
  return (
    element !== ',' &&
    element !== ':' &&
    element !== customSeparator &&
    isNaN(element)
  );
}

//커스텀 구분자가 숫자인지 확인
export function verifyCustomSeparator(customSeparator) {
  if (!isNaN(customSeparator)) {
    throw new Error('[ERROR] 커스텀 구분자를 문자로 입력해 주세요.');
  }
}

//커스텀, 기본 구분자 이외의 구분자가 존재하는지 확인
export function verifyInvalidSeparator(numbers, customSeparator) {
  numbers.forEach((element) => {
    if (hasInvalidSeparator(element, customSeparator)) {
      throw new Error(
        '[ERROR] 커스텀 구분자와 쉼표(,), 콜론(:) 이외의 문자를 입력할 수 없습니다.'
      );
    }
  });
}

//숫자가 음수인지 확인
export function verifyInvalidNumber(numbers) {
  const hasNegativeNumber = numbers.some((element) => element < 0);
  if (hasNegativeNumber) {
    throw new Error('[ERROR] 덧셈할 숫자로 양수를 입력해 주세요.');
  }
}
