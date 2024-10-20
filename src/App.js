import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력 받는 메세지를 먼저 출력
    Console.print("덧셈할 문자열을 입력해 주세요.");

    // 다음 줄에서 입력을 받음
    const input = await Console.readLineAsync("");
  }
}

export default App;
