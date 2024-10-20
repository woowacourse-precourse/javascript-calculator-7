import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      `구분자와 양수로 된 문자열을 입력해주세요.`
    );
    try {
      const result = sumNumFromString(input);
      Console.print(result);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
