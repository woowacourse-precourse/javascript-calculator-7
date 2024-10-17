import { Console } from '@woowacourse/mission-utils';

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

  if (numericValues.some(isNaN)) {
    throw new Error('[ERROR] 숫자 이외의 값이 포함되어 있습니다.');
  }
  if (numericValues.some((num) => num < 0)) {
    throw new Error('[ERROR] 양수 이외의 값이 포함되어 있습니다.');
  }

  return numericValues.reduce((acc, num) => acc + num, 0);
}

//커스텀 구분자로 문자열 분리 및 합산
function sumWithCustomDelimiter(input) {
  if (input.startsWith('//')) {
    const delimitersStartIndex = 2;
    const delimitersEndIndex = input.indexOf('\\n');
    if (delimitersEndIndex === -1) {
      throw new Error('[ERROR] 잘못된 커스텀 구분자 형식입니다.');
    }
    const customDelimiter = input.substring(
      delimitersStartIndex,
      delimitersEndIndex,
    );
    if (!customDelimiter) {
      throw new Error('[ERROR] 잘못된 커스텀 구분자 형식입니다.');
    }

    const delimiters = new RegExp(`[${customDelimiter}|,|:]`);
    const numbersString = input.slice(delimitersEndIndex + 2);
    const tokens = numbersString.split(delimiters);

    if (tokens.some((token) => token === '')) {
      throw new Error('[ERROR] 구분자 사이에 숫자가 없습니다.');
    }

    const numericValues = tokens.map(Number);

    if (numericValues.some(isNaN)) {
      throw new Error('[ERROR] 숫자 이외의 값이 포함되어 있습니다.');
    }
    if (numericValues.some((num) => num < 0)) {
      throw new Error('[ERROR] 양수 이외의 값이 포함되어 있습니다.');
    }

    return numericValues.reduce((acc, num) => acc + num, 0);
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
