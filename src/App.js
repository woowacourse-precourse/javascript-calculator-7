import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력 받는 메세지를 먼저 출력
    Console.print("덧셈할 문자열을 입력해 주세요.");

    // 다음 줄에서 입력을 받음 + 입력 받은 문자열의 양 끝 공백 제거
    const input = await Console.readLineAsync("").then((input) => input.trim());
  }
}

export default App;
