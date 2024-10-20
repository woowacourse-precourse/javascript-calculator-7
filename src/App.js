import { Console } from '@woowacourse/mission-utils';
// import parseString from './Parser/parser.js';

import {
  ERROR_MESSAGES,
  ERROR_PREFIX,
  SYSTEM_MESSAGES,
} from './Constraints/Constraints.js';

import {
  validateCustomInput,
  validateCustomInputFormat,
  validateNormalInput,
} from './Validator/validator.js';
import sumAllNumbers from './Util/sumAllNumbers.js';
import { escapeRegExp } from './Util/regex.js';
function parseCustomInput(input) {
  // 입력이 //로 시작하고 \n을 포함하는지 확인한다.
  validateCustomInputFormat(input);

  const delimiterEnd = input.indexOf('\\n');
  const delimiter = input.slice(2, delimiterEnd);

  // delimiter가 비어있으면 에러를 던진다.
  if (delimiter === '') {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.EMPTY_DELIMITER}`);
  }
  // console.log(delimiter);
  // console.log('1||2'.split('|'));

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
  // validateNoDuplicateDelimiters(parts);
  // 모든 숫자의 합을 반환한다.

  return sumAllNumbers(parts);
}
function parseNormalInput(str) {
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

function isFirstCharNumber(str) {
  // 백업용 가드절. 로직에 악영향을 끼치면 폐기예정

  // 첫 번째 문자가 숫자인지 확인
  return /^\d/.test(str);
}
function parseString(str) {
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
}

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const result = parseString(input);
    return Console.print(`${SYSTEM_MESSAGES.PARSE_RESULT}${result}`);
  }
}

export default App;
