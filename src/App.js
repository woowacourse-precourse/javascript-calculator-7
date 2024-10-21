import { Console } from "@woowacourse/mission-utils";

const ERROR_MESSAGE = "[ERROR] 잘못된 입력 값 형식입니다.";

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

      const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      };

      const customDelimiter = checkHasCustom(input);
      if (
        input.includes(`${customDelimiter}${customDelimiter}`) ||
        input.includes(",,") ||
        input.includes(";;")
      ) {
        throw new Error(ERROR_MESSAGE);
      }
      const regexString = customDelimiter
        ? `${escapeRegExp(customDelimiter)}|,|:`
        : ",|:";
      const regex = new RegExp(regexString, "g");
      const numbersWithMark = customDelimiter
        ? input.split("\\n")[1].replace(regex, "!")
        : input.replace(regex, "!");

      const sum = numbersWithMark
        .split("!")
        .map((value) => {
          const num = Number(value);
          if (isNaN(num) | (num < 0)) {
            throw new Error(ERROR_MESSAGE);
          }
          return num;
        })
        .reduce((acc, cur) => acc + cur, 0);

      Console.print("결과 : " + sum);
    } catch (error) {
      Console.print(error);
      throw error;
    }
  }
}

export default App;
