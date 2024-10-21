import { Console } from "@woowacourse/mission-utils";
import { checkHasCustom, escapeRegExp, hasDuplicate } from "./utils.js";
import { ERROR_MESSAGES, DELIMITER } from "./constants.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const customDelimiter = checkHasCustom(input);
      if (customDelimiter) {
        DELIMITER.push(escapeRegExp(customDelimiter));
      }

      if (hasDuplicate(input, DELIMITER)) {
        throw new Error(ERROR_MESSAGES.DUPLICATED_DELIMITER);
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
            throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
          }
          return num;
        })
        .reduce((acc, cur) => acc + cur, 0);

      Console.print("결과 : " + sum);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
