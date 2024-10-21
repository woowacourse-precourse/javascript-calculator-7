/**
 * 문자열에서 커스텀 구분자를 추출하는 함수입니다.
 * @param {string} string - 커스텀 구분자를 포함한 문자열 ("//구분자\n" 형식에서 구분자 추출)
 * @returns {object}
 * @returns {string} returns.separator - 커스텀 구분자 문자열을 반환합니다.
 * @returns {string} returns.newNumberString - 커스텀 구분자 지정 이후의 숫자 문자열을 반환합니다.
 */
const getCustomSeparator = (string) => {
  const modifiedString = string.replace("\\n", "\n");
  const endIndex = modifiedString.indexOf("\n");

  if (endIndex === -1) {
    throw new Error(
      "커스텀 구분자 형식에 오류가 있습니다. 다시 한 번 확인해주세요."
    );
  }

  const separator = string.slice(2, endIndex);
  const newNumberString = string.slice(endIndex + 2);

  return { separator, newNumberString };
};

/**
 * 입력된 숫자의 유효성을 검증하는 함수입니다
 * @param {any} number - 입력된 숫자로, 양수를 기대합니다. 양수가 아닐 경우 Error를 발생시킵니다.
 */
const validateNumber = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error("정수가 아닌 값은 허용하지 않습니다.");
  }
  if (number < 0) {
    throw new Error("음수를 허용하지 않습니다.");
  }
};

/**
 * 사용자 입력값에서 숫자 목록을 추출하는 함수입니다.
 * @param {string} input - 숫자와 구분자를 포함한 문자열 (기본 구분자는 쉼표, 콜론이며 커스텀 구분자가 있을 경우 문자열 앞부분에 "//구분자\n" 형식을 가집니다.)
 * @returns {number[]} - 추출된 숫자 목록을 배열로 반환합니다.
 */
export const getNumbers = (input) => {
  const SEPARATOR = /[,:]/;
  let strings = [];
  let numbers = [];

  if (input.startsWith("//")) {
    const { separator: customSeparator, newNumberString } =
      getCustomSeparator(input);
    strings = newNumberString.split(customSeparator);
  } else {
    strings = input.split(SEPARATOR);
  }

  numbers = strings.map((string) => {
    const number = Number(string);
    validateNumber(number);

    return number;
  });

  return numbers;
};
