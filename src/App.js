import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.CUSTOM_DELIMITER_REGEX = /^\/\/(.)\n(.*)/;
    this.DEFAULT_DELIMITER = ",|:";
  }

  async run() {
    const INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const { DELIMITER, NUMBERS } = this.parseInput(INPUT);
    const PARSED_NUMBERS = this.splitAndParse(NUMBERS, DELIMITER);
    Console.print(`분리된 숫자들: ${PARSED_NUMBERS.join(", ")}`);
  }

  parseInput(input) {
    const MATCH = input.match(this.CUSTOM_DELIMITER_REGEX);

    if (MATCH) {
      return { DELIMITER: MATCH[1], NUMBERS: MATCH[2] };
    }

    return { DELIMITER: this.DEFAULT_DELIMITER, NUMBERS: input };
  }

  splitAndParse(numbers, delimiter) {
    return numbers
      .split(new RegExp(delimiter))
      .map((num) => parseInt(num.trim(), 10));
  }
}

export default App;
