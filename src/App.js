import { Console } from "@woowacourse/mission-utils";
import { checkHasCustom, escapeRegExp, hasDuplicate } from "./utils.js";

const ERROR_MESSAGE = "[ERROR] 잘못된 입력 값 형식입니다.";
const DELIMITER = [",", ":"];

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const customDelimiter = checkHasCustom(input);
      DELIMITER.push(customDelimiter && customDelimiter);

      if (hasDuplicate(input, DELIMITER)) {
        throw new Error(ERROR_MESSAGE);
      }

      const regexString = DELIMITER.join("|");
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
