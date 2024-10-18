export function validateNumbers(parsedArray) {
  return parsedArray.map((value) => {
    const number = Number(value);

    if (Number.isNaN(number))
      throw new Error('[ERROR] 구분자 이외의 문자열이 포함되어 있습니다.');

    if (number < 0) throw new Error('[ERROR] 음수는 포함할 수 없습니다.');

    return number;
  });
}

export function validateMixedDelimiters(userInput) {
  if (/^\/\/(.*?)\\n.*[,:]/.test(userInput))
    throw new Error(
      '[ERROR] 기본 구분자와 커스텀 구분자를 혼합하여 사용할 수 없습니다.',
    );
}
