import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const checkHasCustom = (string) => {
        if (string.startsWith("//") && string.includes("\\n")) {
          const DELIMITER = string.slice(2, string.indexOf("\\n"));
          return DELIMITER;
        }
        return null;
      };

      const regexString = checkHasCustom(input)
        ? `${checkHasCustom(input)}|//|\\\\n|,|:`
        : ",|:";
      const regex = new RegExp(regexString, "g");
      const numbersWithMark = input.replace(regex, "!");

      const sum = numbersWithMark
        .split("!")
        .map((value) => {
          const num = Number(value);
          if (isNaN(num)) {
            throw new Error("[ERROR]");
          }
          return num;
        })
        .reduce((acc, cur) => acc + cur, 0);

      Console.print("결과 : " + sum);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
