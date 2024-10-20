import { Console } from '@woowacourse/mission-utils';
// import parseString from './Parser/parser.js';

import {
  ERROR_MESSAGES,
  ERROR_PREFIX,
  SYSTEM_MESSAGES,
} from './Constraints/Constraints.js';

const numberPattern = '\\d+(\\.\\d+)?';
const specialCharsPattern = /[.*+?^${}()|[\]\\]/g;
// const ERROR_PREFIX = '[ERROR] ';
// const ERROR_MESSAGES = {
//   INVALID_INPUT_FORMAT:
//     '커스텀 구분자 입력시 입력은 반드시 "//"로 시작하고, "\\n"이 포함되어야 합니다.',
//   INVALID_CUSTOM_INPUT:
//     'delimiter와 숫자 이외의 문자가 포함되었거나, 입력 순서가 잘못되었습니다.',
//   INVALID_NUMBER_INPUT: '문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
//   DUPLICATE_DELIMITERS: '숫자 사이에 중복된 delimiter가 있습니다.',
//   MISSING_DELIMITER: 'Delimiter를 입력받지 못했습니다.',
//   EMPTY_STRING: '빈 문자열입니다.',
//   EMPTY_DELIMITER: 'delimiter가 비어있습니다.', // 추가된 에러 메시지
// };
function escapeRegExp(string) {
  // 정규식에 사용되는 모든 예약어들을 escape 처리한다. .*[]\ 등...
  // 원본 문자를 남기고 ($&), 그 문자에 \를 더 붙인다.
  // "Hello. How+are|you?" =>
  // "Hello\. How\+are\|you\?"
  return string.replace(specialCharsPattern, '\\$&');
}

function buildNormalInputValidationRegex() {
  return new RegExp(`^${numberPattern}$`);
}

function buildCustomInputValidationRegex(escapedDelimiter) {
  // escapedDelimiter를 포함하여 동적으로 정규식을 생성
  return new RegExp(`^${numberPattern}(${escapedDelimiter}${numberPattern})*$`);
}

function validateCustomInputFormat(input) {
  const isInvalidFormat = !input.startsWith('//') || !input.includes('\\n');
  if (isInvalidFormat) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_INPUT_FORMAT}`);
  }
}

function validateCustomInput(inputString, escapedDelimiter) {
  if (inputString === '') return;
  const validationRegex = buildCustomInputValidationRegex(escapedDelimiter);
  if (!validationRegex.test(inputString)) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_CUSTOM_INPUT}`);
  }
}

function validateNormalInput(splitValues) {
  const validationRegex = buildNormalInputValidationRegex();
  if (splitValues.some(value => !validationRegex.test(value))) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_NUMBER_INPUT}`);
  }
}
function sumAllNumbers(parts) {
  // 각 부분을 숫자로 변환하고 총합을 계산한다.
  return parts.map(parseFloat).reduce((acc, curr) => acc + curr, 0);
}
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
