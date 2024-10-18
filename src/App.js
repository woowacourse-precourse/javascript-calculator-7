import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    Console.print(input.slice(0, 2));
    Console.print(isNaN(input));

    if (isNaN(input) && input.slice(0, 2) !== "//") {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    // if (decision !== "1" && decision !== "2") {
    //   throw new Error("[ERROR] 잘못된 입력입니다.");
    // }

    // //;\n1;2;3

    // if (input.slice(0, 1)
  }
}

export default App;
