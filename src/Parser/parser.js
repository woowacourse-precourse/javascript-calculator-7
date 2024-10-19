import parseNormalInput from './SubParser/parseNormalInput.js';
import parseCustomInput from './SubParser/parseCustomInput.js';

import isFirstCharNumber from '../Util/isFirstCharNumber.js';
// 에러를 처리하는 함수

// 에러를 출력하는 함수
export default function parseString(str) {
  try {
    if (!str && str === '') {
      return 0;
    }
    // 문자열의 첫 번째 문자가 숫자인지 확인
    if (isFirstCharNumber(str)) {
      // 숫자로 시작하면 일반 입력을 처리
      return parseNormalInput(str);
    }
    // 커스텀 입력을 처리
    return parseCustomInput(str);
  } catch (error) {
    // 에러 발생 시 처리
    throw new Error(error);
  }
}
