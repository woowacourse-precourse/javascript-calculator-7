import { Console } from '@woowacourse/mission-utils';

class App {
  separators = [',', ':'];
  extractedNumbers = [];

  async run() {
    const INPUT = await Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );

    let result;

    if (this.isEmpty(INPUT)) {
      result = 0;
    } else {
      result = INPUT;
    }

    this.printResult(result);
  }

  isEmpty(str) {
    return str.trim().length === 0;
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
