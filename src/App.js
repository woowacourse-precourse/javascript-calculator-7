import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.CUSTOM_DELIMITER_REGEX = /^\/\/(.+)\n(.*)/; // 커스텀 구분자를 다중 문자로 변경
    this.DEFAULT_DELIMITER = ",|:";
    this.ERROR_PREFIX = "[ERROR]";
  }

  async run() {
    const INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    try {
      const RESULT = this.calculate(INPUT);
      Console.print(`결과 : ${RESULT}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculate(input) {
    const { DELIMITER, NUMBERS } = this.parseInput(input);
    const PARSED_NUMBERS = this.splitAndParse(NUMBERS, DELIMITER);
    this.validateNumbers(PARSED_NUMBERS);
    return this.sum(PARSED_NUMBERS);
  }

  parseInput(input) {
    const MATCH = input.match(this.CUSTOM_DELIMITER_REGEX);

    if (MATCH) {
      return { DELIMITER: this.escapeDelimiter(MATCH[1]), NUMBERS: MATCH[2] };
    }

    return { DELIMITER: this.DEFAULT_DELIMITER, NUMBERS: input };
  }

  escapeDelimiter(delimiter) {
    // 정규표현식에서 특수문자를 구분자로 사용할 때 문제가 생길 수 있으므로 이스케이프 처리
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

  sum(numbers) {
    return numbers.reduce((ACC, CURR) => ACC + CURR, 0);
  }
}

export default App;
