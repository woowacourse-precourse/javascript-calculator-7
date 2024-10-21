import { DELIMITER_CONFIG } from "../config/delimiterConfig.js";

export const extractNumbersAsString = (input) => {
  const { START, END, DEFAULT } = DELIMITER_CONFIG;
  let delimiters = [...DEFAULT];
  let originalInput = input;
  let result = [];

  if (input === "") return ["0"];

  if (input.includes(START) && input.includes(END)) {
    // 특수 구분자 처리
    const START_IDX = input.indexOf(START) + START.length;
    const END_IDX = input.indexOf(END);

    const SLICE_START_IDX = START_IDX - START.length;
    const SLICE_END_IDX = END_IDX + END.length;

    if (START_IDX < END_IDX) {
      const customDelimiter = input.substring(START_IDX, END_IDX);
      delimiters.push(customDelimiter);

      // 문자열 자르기
      input = input.slice(0, SLICE_START_IDX) + input.slice(SLICE_END_IDX);
    }
  }

  // 구분자에 따른 문자열 파싱
  for (let delimiter of delimiters) {
    input = input.split(delimiter).join("");
  }

  if (input === originalInput) {
    return [originalInput]; // 문자열을 그대로 배열로 반환
  }

  result = input.split("");
  return result;
};
