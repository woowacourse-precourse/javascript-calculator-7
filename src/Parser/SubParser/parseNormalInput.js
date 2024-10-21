import sumAllNumbers from '../../Util/sumAllNumbers.js';
import { validateNormalInput } from '../../validator/validator.js';
import { ERROR_MESSAGES, ERROR_PREFIX } from '../../Constraints/Constraints.js';
import throwError from '../../Error/handleError.js';

export default function parseNormalInput(str) {
  if (str === '') {
    return 0;
  }

  //  null 혹은 undefined 처리
  if (!str) {
    throwError(`${ERROR_PREFIX}${ERROR_MESSAGES.EMPTY_STRING}`);
  }

  const splitters = [':', ','];
  const parts = str.split(new RegExp(`[${splitters.join('')}]`));

  validateNormalInput(parts);

  return sumAllNumbers(parts);
}
