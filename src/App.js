import { Console } from "@woowacourse/mission-utils";

class App {
  getNumBeforeSeparator(input, separator = []) {
    let num = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "," || ":") {
        break;
      }
      num += input[i];
    }
    return { num, nextInput: input.slice(num.length + 1) };
  }

  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    Console.print(`결과: ${input}`);
  }
}

export default App;
