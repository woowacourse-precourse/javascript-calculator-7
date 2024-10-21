import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      Console.print('덧셈할 문자열을 입력해주세요.');
      const userInput = await this.getUserInput();
      const result = this.sumNumbers(userInput);
      result && Console.print(`결과 : ${result}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getUserInput() {
    return await Console.readLineAsync('');
  }

  sumNumbers(input) {
    input = input.trim();

    if (input === null || input === undefined || input === '') {
      return 0;
    }

    if (/[,;]{2,}/.test(input)) {
      throw new Error('[ERROR] 연속된 구분자는 허용되지 않습니다.');
    }

    input = input.replace('\\n', '\n');

    let regex = /[,:]/;
    const customRegex = input.match(/^\/\/(.+)\r?\n/);

    if (customRegex) {
      regex = new RegExp(`[,:${customRegex[1]}]`);
      input = input.split(/\r?\n/)[1];
    }

    const numbers = input.split(regex).map(Number);

    if (numbers.some((num) => Number.isNaN(num))) {
      throw new Error(
        '[ERROR] 올바른 값을 얻으려면 새로운 커스텀 구분자를 지정하거나 올바른 값을 입력해주세요.',
      );
    }
    if (numbers.some((num) => num < 0)) {
      throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
    }
    const result = numbers.reduce((sum, num) => sum + num, 0);
    return result;
  }
}

export default App;
