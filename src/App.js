import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = "";

    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    if (isNaN(input) && input.slice(0, 2) !== "//") {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    if (input.slice(0, 2) === "//") {
      separator = input.slice(2, 3);
      Console.print("커스텀 구분자: " + separator);
    }

    // //;\n1;2;3
  }
}

export default App;
