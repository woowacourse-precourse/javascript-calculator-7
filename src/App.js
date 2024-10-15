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
        "덧셈할 문자열을 입력해 주세요."
      );

      const regexString = checkHasCustom(input)
        ? `${checkHasCustom(input)}|//|\\\\n`
        : ",|:";
      const regex = new RegExp(regexString, "g");

      console.log(input.replace(regex, "!"));
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
