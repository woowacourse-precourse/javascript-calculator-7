import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    let SUM = 0;
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    for (let i = 0; i < INPUT.length; i++) {
      if (INPUT[i] === '-') {
        throw new Error('[ERROR]');
      }
      if (INPUT[i] >= '0' && INPUT[i] <= '9') {
        SUM += +INPUT[i];
      }
    }

    Console.print(`결과 : ${SUM}`);
  }
}

export default App;

// 커스텀 구분자 보완할 것