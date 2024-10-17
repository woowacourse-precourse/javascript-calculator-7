import { Console } from '@woowacourse/mission-utils';

// 빈 문자열 처리
function handleEmptyInput(input) {
  return input === '' ? 0 : null;
}

// 기본 구분자로 문자열 분리 및 합산
function sumWithDefaultDelimiters(input) {
  const delimiters = /[,|:]/;
  const numbers = input.split(delimiters).map(Number);

  if (numbers.some(isNaN)) {
    throw new Error('[ERROR] 숫자 이외의 값이 포함되어 있습니다.');
  }
  if (numbers.some((num) => num < 0)) {
    throw new Error('[ERROR] 양수 이외의 값이 포함되어 있습니다.');
  }

  return numbers.reduce((acc, num) => acc + num, 0);
}

//커스텀 구분자로 문자열 분리 및 합산
function sumWithCustomDelimiter(input) {
  if (input.startsWith('//')) {
    const delimitersStartIndex = 2;
    const delimitersEndIndex = input.indexOf('\\n');
    const customDelimiter = input.substring(
      delimitersStartIndex,
      delimitersEndIndex,
    );

    const delimiters = new RegExp(`[${customDelimiter}|,|:]`);
    const numbers = numbersString.split(delimiters).map(Number);

    if (numbers.some(isNaN)) {
      throw new Error('[ERROR] 숫자 이외의 값이 포함되어 있습니다.');
    }
    if (numbers.some((num) => num < 0)) {
      throw new Error('[ERROR] 양수 이외의 값이 포함되어 있습니다.');
    }

    return numbers.reduce((acc, num) => acc + num, 0);
  }
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
