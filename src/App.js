import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputValue = await this.getInputValue();
    let result = inputValue;

    try {
      if (!inputValue) {
        throw new Error('[ERROR] 입력값이 없습니다.');
      }

      Console.print(`결과 : ${result}`);
    } catch (err) {
      Console.print(err);
    }
  }

  async getInputValue() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }
}

export default App;
