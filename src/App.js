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

    const parseStrWithCustomSeparator = (str) => {
      return str.split("\\n")[1];
    };

    const separators = [",", ":"];
    let str = input;

    if (isCustomSeparator(input)) {
      const customSeparator = getCustomSeparator(input);
      separators.push(customSeparator);
      str = parseStrWithCustomSeparator(input);
    }

    const separateStr = (str, separators) => {
      let newStr = str;
      separators.forEach((separator) => {
        const regex = new RegExp(`[${separator}]`, "g");
        newStr = newStr.replace(regex, ",");
      });
      const arr = newStr.split(",");
      return arr;
    };
    Console.print(separateStr(str, separators));
  }
}

export default App;
