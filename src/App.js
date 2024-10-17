import { MissionUtils } from '@woowacourse/mission-utils';
const { Console } = MissionUtils;

class App {
  async run() {
    Console.readLine(
      '덧셈할 문자열을 입력해 주세요.',
      (answer) => {
        const sum = answer
          .split(/[:,]/g)
          .reduce((a, c) => Number(a) + Number(c));
        console.log(`결과: ${sum}`);
      }
    );
  }
}

export default App;
