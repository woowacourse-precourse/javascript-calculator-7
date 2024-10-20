// 숫자가 모두 양수가 아닌 경우
export const isAllPositive = (numbers) => {
  return numbers.every((num) => num > 0);
};

// 커스텀 문자열이 있는데 커스텀 형식에 맞지 않는 경우
export const isValidCustomSeparator = (customString, customSeparators) => {
  return !(customString && customSeparators.length === 0);
};

// 조건이 true인 경우 예외 처리
export const assertCondition = (condition, errorMessage) => {
  if (condition) {
    throw new Error(errorMessage);
  }
};
