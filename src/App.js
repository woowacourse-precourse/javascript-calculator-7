import { Console } from "@woowacourse/mission-utils";

class App {
  static DEFAULT_DELIMITERS = [",", ":"];
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const result = this.calculate(input);

    Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    if (input === "") {
      return 0;
    }

    const { delimiter, numbersString } = this.parseInput(input);
    const numbers = this.splitNumbers(numbersString, delimiter);
    this.validateNumbers(numbers);
    return this.sum(numbers);
  }

  parseInput(input) {
    // 커스텀 구분자인 경우
    if (input.startsWith("//")) {
      const [delimiterPart, numbersString] = input.split("\\n");
      const delimiter = delimiterPart.slice(2);
      return { delimiter, numbersString };
    }

    // 기본 구분자인 경우
    return { delimiter: App.DEFAULT_DELIMITERS, numbersString: input };
  }

  splitNumbers(numbersString, delimiter) {
    if (Array.isArray(delimiter)) {
      const regex = new RegExp(`[${delimiter.join("")}]`);
      return numbersString.split(regex);
    }
    return numbersString.split(delimiter);
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      const parsedNumber = parseInt(number);

      if (isNaN(parsedNumber)) {
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
      }

      if (parsedNumber < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
    });
  }
}

export default App;
