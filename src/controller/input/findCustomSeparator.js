const findCustomSeparator = (input) => {
  let customSeparator = null;

  const customSeparatorMatch = input.match(/^\/\/(.)\n/);

  if (customSeparatorMatch) {
    customSeparator = customSeparatorMatch[1];
  }

  // 커스텀 구분자의 길이가 1이 아닌 경우 에러 처리

  return customSeparator;
};

export default findCustomSeparator;
