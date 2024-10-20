import { Console } from '@woowacourse/mission-utils';

class App {
  async getString() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  async getNumbers(input) {
    if (input.trim() === '') {
      return [0];
    }

    const match = input.match(/^\/\/(.+?)\\n/);
    const string = match ? input.replace(match[0], '') : input;

    const regex = match ? new RegExp(`[:,${match[1]}]`) : new RegExp(`[:,]`);

    const result = string.split(regex).filter((v) => v.trim() !== '');

    if (!this.validate(result)) {
      throw new Error(`[ERROR] ${input}값은 유효하지 않습니다.`);
    }

    return result;
  }

  validate(arr) {
    return arr.every((value) => !isNaN(value) && parseInt(value) >= 0);
  }

  async calculateNumbers(numbers) {
    return numbers.reduce((acc, cur) => acc + parseInt(cur), 0);
  }

  async run() {
    const input = await this.getString();
    const numbers = await this.getNumbers(input);
    const result = await this.calculateNumbers(numbers);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
