import { CUSTOM_DELIMITER_REGEX } from '../constant/constant.js';

//커스텀 구분자가 있다면 추출해 반환하는 함수
export function getCustomDelimiter(input) {
  const match = input.match(CUSTOM_DELIMITER_REGEX);
  if (match) {
    const customDelimiter = match[1];
    return customDelimiter;
  }
  return null;
}

//커스텀 구분자 부분을 문자열에서 제거하는 함수
export function cleanStringAfterDelimiter(input) {
  return input.replace(CUSTOM_DELIMITER_REGEX, "");
}
