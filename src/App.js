import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const checkHasCustom = (string) => {
        if (string.startsWith("//") && string.includes("\\n")) {
          const DELIMITER = string.slice(2, string.indexOf("\\n"));
          return DELIMITER;
        }
        return null;
      };

      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const regexString = checkHasCustom(input)
        ? `${checkHasCustom(input)}|//|\\\\n`
        : ",|:";
      const regex = new RegExp(regexString, "g");
      const numbersWithMark = input.replace(regex, "!");

      const sum = numbersWithMark
        .split("!")
        .map(Number)
        .reduce((acc, cur) => {
          return acc + (isNaN(cur) ? 0 : cur);
        }, 0);

      Console.print("결과 : " + sum);
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
