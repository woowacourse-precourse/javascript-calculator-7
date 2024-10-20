import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  calculateSum(input) {
    if (input === '') return 0; // 빈 문자열 처리

    return 0; // 기본 값 (나중에 업데이트 예정)
  }
}

const app = new App();
app.run();

export default App;
