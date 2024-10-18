import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getUserInput();
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getUserInput() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    if (input.trim() === "") {
      throw new Error("[ERROR] 입력이 비어있습니다.");
    }
    return input;
  }
  calculateSum(input) {
    if (input === "") return 0;

    let delimiter = /[,:]/;
    let numbers = input;

    const processedInput = input.replace(/\\n/g, "\n");

    if (processedInput.startsWith("//")) {
      const matches = processedInput.match(/^\/\/([^\n]+)\n(.*)$/s);
      if (matches) {
        const customDelimiter = matches[1];
        delimiter = new RegExp(this.escapeRegExp(customDelimiter), "g");
        numbers = matches[2];
      } else {
        throw new Error("[ERROR] 잘못된 입력 형식입니다.");
      }
    }

    const parsedNumbers = numbers.split(delimiter).map((num) => {
      const trimmed = num.trim();
      if (trimmed === "") return 0;
      const parsed = parseInt(trimmed, 10);
      if (isNaN(parsed)) {
        throw new Error(`[ERROR] 잘못된 입력값: ${trimmed}`);
      }
      if (parsed < 0) {
        throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${parsed}`);
      }
      return parsed;
    });

    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

export default App;
