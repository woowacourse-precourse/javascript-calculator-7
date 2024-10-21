import sumAllNumbers from '../../Util/sumAllNumbers.js';
import {
  validateCustomInput,
  // validateNoDuplicateDelimiters,
  validateCustomInputFormat,
} from '../../validator/validator.js';
import { ERROR_MESSAGES, ERROR_PREFIX } from '../../Constraints/Constraints.js';

import { escapeRegExp } from '../../Util/regex.js';

export default function parseCustomInput(input) {
  // 입력이 //로 시작하고 \n을 포함하는지 확인한다.
  validateCustomInputFormat(input);

  const delimiterEnd = input.indexOf('\\n');
  const delimiter = input.slice(2, delimiterEnd);

  // delimiter가 비어있으면 에러를 던진다.
  if (delimiter === '') {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.EMPTY_DELIMITER}`);
  }

  // escape 처리.

  const escapedDelimiter = escapeRegExp(delimiter);

  // delimiter 이후의 내용을 추출한다.
  const content = input.slice(delimiterEnd + 2);

  validateCustomInput(content, escapedDelimiter);
  // 구분자는 있지만, 내용이 빈경우
  if (content === '') {
    return 0;
  }

  const parts = content.split(delimiter);

  return sumAllNumbers(parts);
}
