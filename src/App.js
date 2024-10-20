import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const isCustomSeparator = (str) => {
      return str.includes("//") && str.includes("\\n");
    };

    const getCustomSeparator = (str) => {
      return str.split("//")[1].split("\\n")[0];
    };

    if (isCustomSeparator(input)) {
      const customSeparator = getCustomSeparator(input);
      console.log(customSeparator);
    }

    // Console.print(isCustomSeparator(input));
    // Console.print(getCustomSeparator(input));
  }
}

export default App;
