import { CUSTOM_DELIMITER_REGEX } from '../constant/constant.js';

//커스텀 구분자가 있다면 추출해 반환하는 함수
export function getCustomDelimiter(input) {
  const match = input.match(CUSTOM_DELIMITER_REGEX);
  if (!match)
    return null;

  const customDelimiter = match[1];

  if (/\d/.test(match[1])) {
    throw new Error("[ERROR] : 커스텀 구분자는 숫자가 될 수 없습니다!")
  }

  if (/^\s+$/.test(customDelimiter)) {
    throw new Error("[ERROR] : 커스텀 구분자는 공백일 수 없습니다!");
  }

  return customDelimiter;
}

//커스텀 구분자 부분을 문자열에서 제거하는 함수
export function cleanStringAfterDelimiter(input) {
  return input.replace(CUSTOM_DELIMITER_REGEX, "");
}
