import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputValue = await this.getInputValue();
    let result = inputValue;

    Console.print(`결과 : ${result}`);
  }

  async getInputValue() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }
}

export default App;
