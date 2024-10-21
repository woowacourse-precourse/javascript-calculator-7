import parseNormalInput from './SubParser/parseNormalInput.js';
import parseCustomInput from './SubParser/parseCustomInput.js';

import isFirstCharNumber from '../Util/isFirstCharNumber.js';
import throwError from '../Error/handleError.js';
import { ERROR_PREFIX, ERROR_MESSAGES } from '../Constraints/Constraints.js';
// 에러를 처리하는 함수

// 에러를 출력하는 함수
export default function parseString(str) {
  if (!str && str === '') {
    return 0;
  }
  if (str === null || str === undefined) {
    throwError(`${ERROR_PREFIX}${ERROR_MESSAGES.EMPTY_STRING}`);
  }
  // 문자열의 첫 번째 문자가 숫자인지 확인
  if (isFirstCharNumber(str)) {
    // 숫자로 시작하면 일반 입력을 처리
    return parseNormalInput(str);
  }
  // 커스텀 입력을 처리
  return parseCustomInput(str);
}
