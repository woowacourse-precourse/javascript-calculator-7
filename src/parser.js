import { Console } from '@woowacourse/mission-utils';
import parseCustomInput from './parseCustomInput';
import parseNormalInput from './parseNormalInput';

// 에러를 처리하는 함수
function handleError(error) {
  // [ERROR]로 시작하는 에러 메시지를 출력
  console.error(`[ERROR] ${error.message}`);
}

// 에러를 출력하는 함수
function parseString(str) {
  try {
    // 문자열의 첫 번째 문자가 숫자인지 확인
    if (isFirstCharNumber(str)) {
      // 숫자로 시작하면 일반 입력을 처리
      return parseNormalInput(str);
    }
    // 커스텀 입력을 처리
    return parseCustomInput(str);
  } catch (error) {
    // 에러 발생 시 처리
    handleError(error);
    return null;
  }
}

// 첫 번째 문자가 숫자인지 확인하는 함수
function isFirstCharNumber(str) {
  if (!str || str.length === 0) {
    throw new Error('빈 문자열입니다.');
  }
  // 첫 번째 문자가 숫자인지 확인 (정규표현식 사용)
  return /^\d/.test(str);
}
