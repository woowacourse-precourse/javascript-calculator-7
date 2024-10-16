import extractSeparator from "./extractseparator.js";

function extractNumbers(input) {
  if (!input) return [];

  const SEPRATOR = extractSeparator(input);
  let NUMBERS = input;

  //커스텀 구분자 사용 시 배열 변환 후 숫자 부분 추출
  if (input.startwith("//")) {
    const SEPARATORENDLNDEX = input.indexof("\n");
    numbers = input.substring(SEPARATORENDLNDEX + 1);
  }
  //기본 구분자를 기준으로 문자열 분리 후 숫자 변환
  return numbers.split(new RegExp("[${SEPRATOR}]")).map(Number);
}

export default extractNumbers;
