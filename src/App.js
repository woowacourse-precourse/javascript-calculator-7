import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.CUSTOM_DELIMITER_REGEX = /^\/\/(.)\n(.*)/;
    this.DEFAULT_DELIMITER = ",|:";
    this.ERROR_PREFIX = "[ERROR]";
  }

  async run() {
    const INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    try {
      const { DELIMITER, NUMBERS } = this.parseInput(INPUT);
      const PARSED_NUMBERS = this.splitAndParse(NUMBERS, DELIMITER);
      this.validateNumbers(PARSED_NUMBERS);
      Console.print(`유효한 숫자들: ${PARSED_NUMBERS.join(", ")}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  parseInput(input) {
    const MATCH = input.match(this.CUSTOM_DELIMITER_REGEX);

    if (MATCH) {
      return { DELIMITER: MATCH[1], NUMBERS: MATCH[2] };
    }

    return { DELIMITER: this.DEFAULT_DELIMITER, NUMBERS: input };
  }

  splitAndParse(numbers, delimiter) {
    return numbers.split(new RegExp(delimiter)).map((num) => {
      const PARSED = parseInt(num.trim(), 10);
      if (isNaN(PARSED)) {
        throw new Error(
          `${this.ERROR_PREFIX} 유효하지 않은 입력값입니다: ${num}`
        );
      }
      return PARSED;
    });
  }

  validateNumbers(numbers) {
    if (numbers.some((num) => num < 0)) {
      throw new Error(`${this.ERROR_PREFIX} 음수는 입력할 수 없습니다.`);
    }
  }
}

export default App;
