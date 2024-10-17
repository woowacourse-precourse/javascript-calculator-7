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

    return result;
  }

  async run() {
    const input = await this.getString();
    const numbers = await this.getNumbers(input);
    Console.print(numbers);
  }
}

export default App;
