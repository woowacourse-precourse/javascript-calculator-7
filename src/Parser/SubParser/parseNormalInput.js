import sumAllNumbers from '../../Util/sumAllNumbers.js';
import { validateNormalInput } from '../../Validator/Validator.js';
import { ERROR_MESSAGES, ERROR_PREFIX } from '../../Constraints/Constraints.js';

export default function parseNormalInput(str) {
  if (str === '') {
    return 0;
  }

  if (!str) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.EMPTY_STRING}`);
  }

  const splitters = [':', ','];
  const parts = str.split(new RegExp(`[${splitters.join('')}]`));

  validateNormalInput(parts);
  // 소수점 허용을 위해 숫자와 소수점을 처리하는 정규표현식
  return sumAllNumbers(parts);
}
