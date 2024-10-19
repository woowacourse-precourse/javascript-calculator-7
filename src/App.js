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
      const numberArray = separatedString.map(Number);
      if (numberArray.includes(NaN)) Console.print("[ERROR]");
      else {
        const result = numberArray.reduce((acc, cur) => acc + cur);
        Console.print(result);
      }
    } else {
      if (numbersString.includes(",") && numbersString.includes(";")) {
        const semicolonSeparatedString = numbersString.split(";");
        const commaSeparatedString = semicolonSeparatedString.map((el) =>
          el.split(",")
        );
        const lastSeparatedString = commaSeparatedString.join(",").split(",");
        const numberArray = lastSeparatedString.map(Number);
        if (numberArray.includes(NaN)) Console.print("[ERROR]");
        else {
          const result = numberArray.reduce((acc, cur) => acc + cur);
          Console.print(result);
        }
      } else if (numbersString.includes(",")) {
        const separatedString = numbersString.split(",");
        const numberArray = separatedString.map(Number);
        if (numberArray.includes(NaN)) Console.print("[ERROR]");
        else {
          const result = numberArray.reduce((acc, cur) => acc + cur);
          Console.print(result);
        }
      } else if (numbersString.includes(";")) {
        const separatedString = numbersString.split(";");
        const numberArray = separatedString.map(Number);
        if (numberArray.includes(NaN)) Console.print("[ERROR]");
        else {
          const result = numberArray.reduce((acc, cur) => acc + cur);
          Console.print(result);
        }
      } else {
        Console.print("[ERROR]");
      }
    }
  }
}

export default App;
