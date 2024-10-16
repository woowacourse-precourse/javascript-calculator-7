import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let splitters = ",:";

    let regex = new RegExp(`[${splitters}]`);

    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. :"
    );
    const result = input
      .split(regex)
      .map((str) => parseInt(str, 10))
      .reduce((acc, cur) => acc + cur, 0);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
