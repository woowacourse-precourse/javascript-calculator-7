import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    Console.print(`입력한 문자열: ${input}`);
  }
}

export default App;
