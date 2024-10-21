const getCustomSeparator = (string) => {};

/**
 * 사용자 입력값에서 숫자 목록을 추출하는 함수입니다.
 * @param {string} input - 숫자와 구분자를 포함한 문자열 (기본 구분자는 쉼표, 콜론이며 커스텀 구분자가 있을 경우 문자열 앞부분에 "//구분자\n" 형식을 가집니다.)
 * @returns {number[]} - 추출된 숫자 목록을 배열로 반환합니다.
 */
export const getNumbers = (input) => {
  const SEPARATOR = /[,:]/;
  let customSeparator;
  let strings = [];
  let numbers = [];

  if (input.startsWith("//")) {
    customSeparator = getCustomSeparator(input);
    strings = input.split(customSeparator);
  } else {
    strings = input.split(SEPARATOR);
  }

  numbers = strings.map((string) => {
    const number = Number(string);
    return number;
  });

  return numbers;
};
