import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해주세요.");
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.: ");
  }
}

export default App;
