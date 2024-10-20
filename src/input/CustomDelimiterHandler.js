import { CUSTOM_DELIMITER_REGEX } from '../constant/constant.js';

//커스텀 구분자를 사용하는 문자열인지 확인
function hasCustomDelimiter(input) {
  return CUSTOM_DELIMITER_REGEX.test(input);
}