import { Console } from "@woowacourse/mission-utils";

class App {
  getNumBeforeSeparator(input, customSeparator = "") {
    let num = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "," || input[i] === ":") {
        break;
      }
      if (customSeparator !== "" && input[i] === customSeparator) {
        break;
      }
      num += input[i];
    }
    return { num, nextInput: input.slice(num.length + 1) };
  }

  getNumSum(input, customSeparator) {
    let sum = 0;
    while (input.length > 0) {
      const { num, nextInput } = this.getNumBeforeSeparator(
        input,
        customSeparator
      );
      sum += Number(num);
      input = nextInput;
    }
    return sum;
  }

  checkCustomSeparator(input) {
    if (input.startsWith("//") && input.includes("\\n")) {
      const parts = input.split("\\n");
      const customSeparator = parts[0].slice(2);
      const remainingInput = parts[1];
      return { customSeparator, remainingInput };
    }
    return { customSeparator: "", remainingInput: input };
  }
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const { customSeparator, remainingInput } =
      this.checkCustomSeparator(input);
    const sum = this.getNumSum(remainingInput, customSeparator);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
