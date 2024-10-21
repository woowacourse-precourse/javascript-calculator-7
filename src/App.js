import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {

      const INPUT = await App.getInput();

    } catch(error) {
      console.print(error.message);
    }
  }

  static async getInput() {
    const INPUT = await Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );

    if (!INPUT) {
      throw new Error('[ERROR] 입력 값이 없습니다.');
    }

    return INPUT;
  }
}

export default App;
