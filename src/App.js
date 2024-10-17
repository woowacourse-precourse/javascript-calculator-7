import { Console } from '@woowacourse/mission-utils';

class App {
  async getString() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  async getNumbers(input) {
    let string = input;
    if (input === '') {
      return [0];
    }

    const match = input.match(/^\/\/(.)\\n/);
    string = match ? string.replace(match[0], '') : string;

    const regex = match ? new RegExp(`[:,${match[1]}]`) : new RegExp(`[:,]`);

    const result = string.split(regex);

    if (!this.validate(result)) {
      throw new Error(`[ERROR] ${input}값은 유효하지 않습니다.`);
    }

    return result;
  }

  validate(numbers) {
    return numbers.every((number) => !isNaN(number) && parseInt(number) >= 0);
  }

  async calculateNumbers(numbers) {
    return numbers.reduce((acc, cur) => acc + parseInt(cur), 0);
  }

  async run() {
    const input = await this.getString();
    const numbers = await this.getNumbers(input);
    const result = await this.calculateNumbers(numbers);
    console.log(result);
  }
}

export default App;
