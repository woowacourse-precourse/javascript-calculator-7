import { Console } from "@woowacourse/mission-utils";

class App {
  static DEFAULT_DELIMITERS = [",", ":"];
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    Console.print("결과 : " + input);
  }

  calculate(input) {
    if (input === "") {
      return 0;
    }
  }

  parseInput(input) {
    if (input.startsWith("//")) {
      const [delimiterPart, numbersString] = input.split("\n");
      const delimiter = delimiterPart.slice(2);
      return { delimiter, numbersString };
    }
    return { delimiter: App.DEFAULT_DELIMITERS, numbersString: input };
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
