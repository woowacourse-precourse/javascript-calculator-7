import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 입력 기능 작성
    const input = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );
    MissionUtils.Console.print(`결과 : ${input}`);
  }
}

export default App;
