import { Console } from '@woowacourse/mission-utils';

// 기본 구분자로 문자열 분리 및 합산
function sumWithDefaultDelimiters(input) {
  const delimiters = /[,|:]/;
  const numbers = input.split(delimiters).map(Number);
  return numbers.reduce((acc, num) => acc + num, 0);
}

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
    const result = sumWithDefaultDelimiters(input);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
