import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const checkIsCustom = (string) => {
        return string.startsWith("//") && string.includes("\\n");
      };

      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요."
      );
      Console.print(checkIsCustom(input));
    } catch (error) {
      console.error("Error");
    }
  }
}

export default App;
