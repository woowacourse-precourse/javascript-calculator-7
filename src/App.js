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
    } else if (INPUT === 'error') {
      return this.printError("'error'를 입력했습니다");
    } else if (!this.validateNumber(INPUT)) {
      return this.printError('숫자가 아닌 문자를 입력하셨습니다');
    } else {
      result = INPUT;
    }

    this.printResult(result);
  }

  isEmpty(str) {
    return str.trim().length === 0;
  }

  validateNumber(num) {
    if (!isNaN(num)) {
      return true;
    } else {
      return false;
    }
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }

  printError(errorMessage) {
    Console.print(`[ERROR] : ${errorMessage}`);
    return;
  }
}

export default App;
