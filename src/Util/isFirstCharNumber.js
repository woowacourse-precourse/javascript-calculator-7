import { ERROR_PREFIX, ERROR_MESSAGES } from '../Constraints/Constraints.js';

export default function isFirstCharNumber(str) {
  // 백업용 가드절. 로직에 악영향을 끼치면 폐기예정
  if (!str || str.length === 0) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.EMPTY_STRING}`);
  }

  // 첫 번째 문자가 숫자인지 확인
  return /^\d/.test(str);
}
