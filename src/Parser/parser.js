import parseNormalInput from './SubParser/parseNormalInput.js';
import parseCustomInput from './SubParser/parseCustomInput.js';

// 에러를 처리하는 함수

function isFirstCharNumber(str) {
  if (!str || str.length === 0) {
    throw new Error('[ERROR]:빈 문자열입니다.');
  }
  // 첫 번째 문자가 숫자인지 확인 (정규표현식 사용)
  return /^\d/.test(str);
}
// 에러를 출력하는 함수
export default function parseString(str) {
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
    throw new Error(error);
  }
}
