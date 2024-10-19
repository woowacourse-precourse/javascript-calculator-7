import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    // 입력값이 비어 있는 경우 0 출력
    if (input === "") {
      Console.print(0);
      return;
    }
  }
}

export default App;
