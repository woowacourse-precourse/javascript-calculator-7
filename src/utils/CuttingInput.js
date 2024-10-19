/**
 * 문자열을 구분자에 맞게 잘라 숫자 배열로 변환하는 함수
 * @param {string} input
 * @param {string} customDelimiter
 * @returns number[]
 */
const cuttingInput = (input, customDelimiter) => {
  const PROCESSED_INPUT = customDelimiter
    ? input.slice(input.indexOf("\\n") + 2)
    : input;

  const DELIMITER_REGEX = new RegExp(`[,:${customDelimiter}]`);

  return PROCESSED_INPUT.split(DELIMITER_REGEX).map(Number);
};

export default cuttingInput;
