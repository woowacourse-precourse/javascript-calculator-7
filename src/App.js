import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요: "
      );
      const result = input; // 계산 함수 추가
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
