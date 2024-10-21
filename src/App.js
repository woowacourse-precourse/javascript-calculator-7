import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.CUSTOM_DELIMITER_REGEX = /^\/\/(.)\\n(.*)$/;
    this.DEFAULT_DELIMITER = ",|:";
    this.ERROR_PREFIX = "[ERROR]";
  }

  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    try {
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculate(input) {
    const { delimiter, numbers } = this.parseInput(input);
    const parsedNumbers = this.splitAndParse(numbers, delimiter);
    this.validateNumbers(parsedNumbers);
    return this.sum(parsedNumbers);
  }

  parseInput(input) {
    const match = input.match(this.CUSTOM_DELIMITER_REGEX);

    if (match) {
      return { delimiter: this.escapeDelimiter(match[1]), numbers: match[2] };
    }

    return { delimiter: this.DEFAULT_DELIMITER, numbers: input };
  }

  escapeDelimiter(delimiter) {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  splitAndParse(numbers, delimiter) {
    return numbers.split(new RegExp(delimiter)).map((num) => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed)) {
        throw new Error(`${this.ERROR_PREFIX} 유효하지 않은 입력값입니다: ${num}`);
      }
      return parsed;
    });
  }

  validateNumbers(numbers) {
    if (numbers.some((num) => num < 0)) {
      throw new Error(`${this.ERROR_PREFIX} 음수는 입력할 수 없습니다.`);
    }
  }

  sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
