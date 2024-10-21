import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해주세요.');
    const userInput = await this.getUserInput();
    const result = this.sumNumbers(userInput);
    Console.print(`결과 : ${result}`);
  }

  async getUserInput() {
    return await Console.readLineAsync('');
  }

  sumNumbers(input) {
    input = input.trim();

    if (input === '') {
      return 0;
    }

    input = input.replace('\\n', '\n');

    let regex = /[,:]/;
    const customRegex = input.match(/^\/\/(.+)\r?\n/);

    if (customRegex) {
      regex = new RegExp(`[,:${customRegex[1]}]`);
      input = input.split(/\r?\n/)[1];
    }

    const numbers = input.split(regex).map(Number);
    let result = undefined;
    if (numbers.includes(NaN)) {
      result =
        '[Error] 올바른 값을 얻으려면 새로운 커스텀 구분자를 지정하거나 올바른 값을 입력해주세요.';
    } else {
      result = numbers.reduce((sum, num) => sum + num, 0);
    }
    return result;
  }
}

export default App;

// 덧셈할 문자열을 입력해 주세요.
// 1,2:3
// //;\n1;2;3
// 결과 : 6
