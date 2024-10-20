import { Console } from "@woowacourse/mission-utils";

class App {
  async getUserInput() {
    try {
      const userInput = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      return userInput;
    } catch (error) {
      Console.print(`[ERROR]`);
    }
  }

  findCustomSeperator(input) {
    const customSeparatorMatch = input.match(/\/\/(.*?)\\n/);

    if (customSeparatorMatch) {
      const customSeparator = customSeparatorMatch[1];
      input = input.replaceAll("//", "");
      input = input.replaceAll("\\n", "");
      return { customSeparator, input };
    }
    return { input };
  }

  getRidOfSeparator(input, customSeparator) {
    if (input.includes(",")) {
      input = input.replaceAll(",", "");
    }
    if (input.includes(":")) {
      input = input.replaceAll(":", "");
    }
    if (input.includes(customSeparator)) {
      input = input.replaceAll(customSeparator, "");
    }

    return input;
  }

  getCalculation(input) {
    const result = input
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);
    return result;
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }

  async run() {}
}

export default App;
