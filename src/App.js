import { Console } from "@woowacourse/mission-utils";

class App {
  getNumBeforeSeparator(input, separator = []) {
    let num = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "," || input[i] === ":") {
        break;
      }
      num += input[i];
    }
    return { num, nextInput: input.slice(num.length + 1) };
  }

  getNumSum(input) {
    let sum = 0;
    while (input.length > 0) {
      const { num, nextInput } = this.getNumBeforeSeparator(input);
      sum += Number(num);
      input = nextInput;
    }
    return sum;
  }

  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    const sum = this.getNumSum(input);
    Console.print(`결과: ${sum}`);
  }
}

export default App;
