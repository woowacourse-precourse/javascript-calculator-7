import sumAllNumbers from '../../Util/sumAllNumbers.js';
import { validateNormalInput } from '../../Validator/Validator.js';

export default function parseNormalInput(str) {
  if (str === '') {
    return [0];
  }

  if (!str) {
    throw new Error('[ERROR]:빈 문자열입니다.');
  }

  const splitters = [':', ','];
  const parts = str.split(new RegExp(`[${splitters.join('')}]`));

  validateNormalInput(parts);
  // 소수점 허용을 위해 숫자와 소수점을 처리하는 정규표현식
  return sumAllNumbers(parts);
}
