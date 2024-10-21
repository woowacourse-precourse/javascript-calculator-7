import { Console } from '@woowacourse/mission-utils';
import { validate } from './validate.js';
import { DEFAULT_DELIMITERS } from './constants.js';

//빈 문자열 처리
function handleEmptyInput(input) {
  return input === '' ? 0 : null;
}

// 구분자를 기준으로 문자열을 숫자로 변환
function parseTokens(input, delimiters) {
  const tokens = input.split(new RegExp(`[${delimiters.join('')}]`));
  validate.emptyToken(tokens); // 구분자 사이 숫자 검증
  return tokens.map(Number);
}

// 커스텀 구분자로 합산
function sumWithCustomDelimiter(input) {
  const customDelimiter = validate.customDelimiter(input); // 커스텀 구분자 검증
  const numbersString = input.slice(5); // 구분자 뒤에 오는 숫자 문자열
  validate.missingNumber(numbersString); // 숫자 누락 검증
  validate.delimiters(numbersString, customDelimiter); // 구분자 검증
  const numberValues = parseTokens(numbersString, [
    customDelimiter,
    ...DEFAULT_DELIMITERS,
  ]);
  validate.numberValues(numberValues); // 숫자 값 검증
  return numberValues.reduce((acc, num) => acc + num, 0);
}

// 기본 구분자로 합산
function sumWithDefaultDelimiters(input) {
  validate.delimiters(input); // 구분자 검증
  const numberValues = parseTokens(input, DEFAULT_DELIMITERS); // 숫자 변환 및 검증
  validate.numberValues(numberValues); // 숫자 값 검증
  return numberValues.reduce((acc, num) => acc + num, 0);
}

// 전체 합산 처리
function sum(input) {
  const result = handleEmptyInput(input); // 빈 문자열 처리
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
