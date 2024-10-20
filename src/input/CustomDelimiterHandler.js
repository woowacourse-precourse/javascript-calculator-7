import { CUSTOM_DELIMITER_REGEX } from '../constant/constant.js';

//커스텀 구분자를 쓰는지 확인하는 함수
export default function handleCustomDelimiter(input) {
  if (!hasCustomDelimiter(input)) {
    return input;
  }
  const customDelimiter = getCustomDelimiter(input);
  const cleanString = cleanStringAfterDelimiter(input);

  return {
    customDelimiter,
    cleanString,
  }
}

//커스텀 구분자를 사용하는 문자열인지 확인
function hasCustomDelimiter(input) {
  return CUSTOM_DELIMITER_REGEX.test(input);
}

//커스텀 구분자를 추출하는 함수
function getCustomDelimiter(input) {
  const match = input.match(CUSTOM_DELIMITER_REGEX);
  if (match) {
    return match[1];
  }
  //추후 예외처리 필요
  // 구분자가 숫자인 경우
}

//커스텀 구분자 부분을 문자열에서 제거하는 함수
function cleanStringAfterDelimiter(input) {
  return input.replace(CUSTOM_DELIMITER_REGEX, "");
}
