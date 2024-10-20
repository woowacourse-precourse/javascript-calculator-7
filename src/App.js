import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      let input = await Console.readLineAsync(
        "덧셈함 문자열을 입력해 주세요.\n"
      );
      let result = App.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print("[ERROR] " + error.message);
    }
  }

  static calculate(input) {
    if (input === "") return 0;

    let delimiters = [",", ":"];
    let numbersString = input;
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\\n");
      if (delimiterEndIndex === -1) {
        throw new Error("잘못된 입력입니다. 커스텀 구분자가 잘못되었습니다.");
      }

      const customDelimiter = input.slice(2, delimiterEndIndex);
      delimiters.push(customDelimiter);
      numbersString = input.slice(delimiterEndIndex + 2);
    }

    let numbers = [numbersString];
    for (let delimiter of delimiters) {
      numbers = numbers.flatMap((numString) => numString.split(delimiter));
    }

    const sum = numbers.reduce((acc, curr) => {
      const num = Number(curr);
      if (isNaN(num) || num < 0)
        throw new Error("숫자가 아니거나 음수가 포함되었습니다.");
      return acc + num;
    }, 0);

    return sum;
  }
}

export default App;
