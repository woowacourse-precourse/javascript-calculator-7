import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {}

  async getUserinput() {
    const userinput = MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return userinput;
  }

  async run() {
    const userinput = await this.getUserinput();
  }
}

export default App;
