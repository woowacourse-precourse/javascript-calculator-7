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

    const inputNumbers = stringInput.split(/[,|:]/).map(Number);
    const sumNumbers = inputNumbers.reduce((acc, curr) => acc + curr, 0);

    Console.print("결과 : " + sumNumbers);
  }
}

export default App;
