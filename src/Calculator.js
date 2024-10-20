import { Console } from '@woowacourse/mission-utils';

function getInput() {
  Console.readLine('덧셈할 문자열을 입력해 주세요.', (answer) => {
    console.log(answer);
    const customDelimiter = getCustomDelimiter(answer);
    console.log(customDelimiter);
  });
}

function getCustomDelimiter(input) {
  const customDelimiterPattern = /^\/\/(.+)\\n/;
  return input.match(customDelimiterPattern);
}

export function calculator() {
  getInput();
}
