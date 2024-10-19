import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈 계산을 위해 원하는 문자열을 입력해 주세요: "
    );
    Console.print("계산 결과: " + input);
  }
}

export default App;
