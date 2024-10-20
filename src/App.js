import { Console } from "@woowacourse/mission-utils";

class App {
  getNumBeforeSeparator(input, customSeparator = "") {
    let num = "";
    if (input[0] === "-") {
      throw new Error("[ERROR]: 음수는 입력할 수 없습니다.");
    }
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "," || input[i] === ":") {
        break;
      }
      if (customSeparator !== "" && input[i] === customSeparator) {
        break;
      }

      num += input[i];
    }
    if (isNaN(num)) {
      throw new Error("[ERROR]: 형식이 올바르지 않습니다.");
    }

    return { num: Number(num), nextInput: input.slice(num.length + 1) };
  }

  getNumSum(input, customSeparator) {
    let sum = 0;
    while (input.length > 0) {
      const { num, nextInput } = this.getNumBeforeSeparator(
        input,
        customSeparator
      );

      sum += num;
      input = nextInput;
    }
    return sum;
  }

  checkCustomSeparator(input) {
    if (input.startsWith("//") && input.includes("\\n")) {
      const parts = input.split("\\n");
      const customSeparator = parts[0].slice(2);
      if (customSeparator.length === 0) {
        throw new Error("[ERROR]커스텀 구분자가 없습니다.");
      }
      const remainingInput = parts[1];
      return { customSeparator, remainingInput };
    }
    return { customSeparator: "", remainingInput: input };
  }
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    try {
      const { customSeparator, remainingInput } =
        this.checkCustomSeparator(input);
      const sum = this.getNumSum(remainingInput, customSeparator);
      Console.print(`결과 : ${sum}`);
    } catch (e) {
      Console.print(e.message);
      return Promise.reject(e);
    }
  }
}

export default App;
