import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const numbersString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const isCustomSeparator =
      numbersString.includes("//") && numbersString.includes("\\n");
    if (isCustomSeparator) {
      Console.print("둘다있음");
      const start = numbersString.indexOf("//");
      const end = numbersString.indexOf("\\n") + 2;
      const custom = numbersString.slice(start, end);
      const customSeparator = custom.replace("//", "").replace("\\n", "");
      const stringToSeparate = numbersString.replace(custom, "");
      const separatedString = stringToSeparate.split(customSeparator);
      Console.print(separatedString);
    } else {
      if (numbersString.includes(",") && numbersString.includes(";")) {
        const semicolonSeparatedString = numbersString.split(";");
        const commaSeparatedString = semicolonSeparatedString.map((el) =>
          el.split(",")
        );
        const lastSeparatedString = commaSeparatedString.join(",").split(",");
        Console.print(lastSeparatedString);
      } else if (numbersString.includes(",")) {
        const separatedString = numbersString.split(",");
        Console.print(separatedString);
      } else if (numbersString.includes(";")) {
        const separatedString = numbersString.split(";");
        Console.print(separatedString);
      } else {
        Console.print("[ERROR]");
      }
    }
  }
}

export default App;
