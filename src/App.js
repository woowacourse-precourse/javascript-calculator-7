import { Console } from '@woowacourse/mission-utils';
import { validateDelimiters, validateNumericValues } from './validate.js';
import { ERROR_MESSAGES } from './errors.js';
import { DEFAULT_DELIMITERS } from './constants.js';

//빈 문자열 처리
function handleEmptyInput(input) {
  return input === '' ? 0 : null;
}

// 구분자를 기준으로 문자열을 숫자로 변환
function parseTokens(input, delimiters) {
  const tokens = input.split(new RegExp(`[${delimiters.join('')}]`));

  if (tokens.some((token) => token === '')) {
    throw new Error(ERROR_MESSAGES.EMPTY_TOKEN);
  }

  return tokens.map(Number);
}

// 커스텀 구분자 추출
function extractCustomDelimiter(input) {
  const match = input.match(/^\/\/(.)\n/);
  if (!match) {
    throw new Error(ERROR_MESSAGES.INVALID_CUSTOM_DELIMITER);
  }
  return match[1];
}

// 커스텀 구분자로 합산
function sumWithCustomDelimiter(input) {
  const customDelimiter = extractCustomDelimiter(input);
  const numbersString = input.slice(4); // 구분자 뒤에 오는 숫자 문자열

  if (!numbersString) {
    throw new Error(ERROR_MESSAGES.MISSING_NUMBER);
  }

  validateDelimiters(numbersString, customDelimiter);
  const numericValues = parseTokens(numbersString, [
    customDelimiter,
    ...DEFAULT_DELIMITERS,
  ]);
  validateNumericValues(numericValues);
  return numericValues.reduce((acc, num) => acc + num, 0);
}

// 기본 구분자로 합산
function sumWithDefaultDelimiters(input) {
  validateDelimiters(input);
  const numericValues = parseTokens(input, DEFAULT_DELIMITERS);
  validateNumericValues(numericValues);
  return numericValues.reduce((acc, num) => acc + num, 0);
}

// 전체 합산 처리
function sum(input) {
  const result = handleEmptyInput(input);
  if (result !== null) {
    return result;
  }

  if (input.startsWith('//')) {
    return sumWithCustomDelimiter(input);
  }

  return sumWithDefaultDelimiters(input);
}

// 프로그램 실행
class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
    const result = sum(input);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
