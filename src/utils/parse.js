export const parseUserInput = (userInput) => {
  // 처음 숫자가 나온 인덱스를 기준으로 문자열을 나눈다.
  const findNumberIndex = userInput.search(/[0-9]/);
  const customString = userInput.slice(0, findNumberIndex);
  const numberString = userInput.slice(findNumberIndex);

  return { customString, numberString };
};

export const splitBySeparators = (numberString, separators) => {
  return numberString.split(separators).map(Number);
};

export const replaceAllPattern = (string, pattern, replacement) => {
  return string.replaceAll(pattern, replacement);
};
