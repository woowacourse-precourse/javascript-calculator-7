import { Console } from '@woowacourse/mission-utils';

// 허용되지 않은 구분자 검사 함수
function validateDelimiters(input, customDelimiter = null) {
  let allowedDelimiters = [',', ':'];

  if (customDelimiter) {
    allowedDelimiters.push(customDelimiter);
  }

  // 알파벳이 포함되면 에러 발생
  if (/[a-zA-Z]/.test(input)) {
    throw new Error('[ERROR] 숫자 이외의 값이 포함되어 있습니다.');
  }

  // 정규식을 이용해 특수 문자 구분자만 허용
  const invalidChars = input.split('').filter((char) => {
    return (
      !/\d/.test(char) &&
      !new RegExp(`[${allowedDelimiters.join('')}]`).test(char)
    );
  });

  if (invalidChars.length > 0) {
    throw new Error('[ERROR] 허용되지 않은 구분자가 사용되었습니다.');
  }
}

// 빈 문자열 처리
function handleEmptyInput(input) {
  return input === '' ? 0 : null;
}

// 기본 구분자로 문자열 분리 및 합산
function sumWithDefaultDelimiters(input) {
  const delimiters = /[,|:]/;

  const tokens = input.split(delimiters);

  if (tokens.some((token) => token === '')) {
    throw new Error('[ERROR] 구분자 사이에 숫자가 없습니다.');
  }

  const numericValues = tokens.map(Number);

  if (numericValues.some((num) => num < 0)) {
    throw new Error('[ERROR] 양수 이외의 값이 포함되어 있습니다.');
  }
  validateDelimiters(input);

  if (numericValues.some((num) => num > Number.MAX_SAFE_INTEGER)) {
    throw new Error('[ERROR] 숫자가 허용된 범위를 초과했습니다.');
  }

  return numericValues.reduce((acc, num) => acc + num, 0);
}

//커스텀 구분자로 문자열 분리 및 합산
function sumWithCustomDelimiter(input) {
  // 커스텀 구분자를 정규표현식으로 추출
  const match = input.match(/^\/\/(.)\n/);
  if (!match) {
    throw new Error('[ERROR] 잘못된 커스텀 구분자 형식입니다.');
  }

  const customDelimiter = match[1]; // 커스텀 구분자
  const numbersString = input.slice(match[0].length); // 구분자와 \n을 제외한 숫자 문자열

  if (!numbersString) {
    throw new Error('[ERROR] 덧셈할 숫자가 없습니다.');
  }

  // 구분자를 이용하여 숫자 문자열을 분리
  const delimiters = new RegExp(`[${customDelimiter}|,|:]`);
  const tokens = numbersString.split(delimiters);

  if (tokens.some((token) => token === '')) {
    throw new Error('[ERROR] 구분자 사이에 숫자가 없습니다.');
  }

  const numericValues = tokens.map(Number);

  if (numericValues.some((num) => num < 0)) {
    throw new Error('[ERROR] 양수 이외의 값이 포함되어 있습니다.');
  }

  // 구분자 검증
  validateDelimiters(numbersString, customDelimiter);

  if (numericValues.some((num) => num > Number.MAX_SAFE_INTEGER)) {
    throw new Error('[ERROR] 숫자가 허용된 범위를 초과했습니다.');
  }

  return numericValues.reduce((acc, num) => acc + num, 0);
}

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
