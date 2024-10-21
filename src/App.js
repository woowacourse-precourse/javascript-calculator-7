import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const stringInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );

    if (stringInput.trim() === "") {
      Console.print("결과 : 0");
      return;
    }

    Console.print("결과 : " + stringInput);
  }
}

export default App;
