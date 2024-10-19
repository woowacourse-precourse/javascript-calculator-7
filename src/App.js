import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const result = this.checkForMismatchedDelimiter(input, ";");
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[ERROR] 에러 발생`);
    }
  }

  calculateSum(input) {
    const numbers = this.parseNumbers(input);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  extractCustomDelimiter(input) {
    const CUSTOM_DELIMITER_REGEX = /^\/\/(.+?)\\n/;
    const customDelimiterMatch = input.match(CUSTOM_DELIMITER_REGEX);
    return customDelimiterMatch[1];
  }

  getNumberString(input, customDelimiter) {
    const CUSTOM_DELIMITER_REGEX = /^\/\/(.+?)\\n/;
    const customDelimiterLength = customDelimiter
      ? input.match(CUSTOM_DELIMITER_REGEX)[0].length
      : 0;
    return input.slice(customDelimiterLength).trim();
  }

  hasDefaultDelimiter(numberString) {
    const DEFAULT_DELIMITERS = /[,:]/g;
    return DEFAULT_DELIMITERS.test(numberString);
  }

  checkForMismatchedDelimiter(numberString, customDelimiter) {
    if (!numberString.includes(customDelimiter)) {
      throw new Error();
    } else return true;
  }

  parseNumbers(input) {
    const DEFAULT_DELIMITERS = /[,:]/g;
    return input
      .split(DEFAULT_DELIMITERS)
      .map((num) => num.trim())
      .filter((num) => num !== "")
      .map(Number);
  }
}

export default App;
