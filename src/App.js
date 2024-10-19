import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const numberArray = this.extractNumbers(input);

    if (numberArray.includes(NaN)) {
      Console.print("[ERROR]");
    } else {
      const result = this.calculateSum(numberArray);
      Console.print(result);
    }
  }

  extractNumbers(input) {
    const comma = ",";
    const semicolon = ";";
    const hasComma = input.includes(",");
    const hasSemicolon = input.includes(";");
    const hasCommaAndSemicolon = input.includes(",") && input.includes(";");
    const hasCustomSeparator = input.includes("//") && input.includes("\\n");

    if (hasCustomSeparator) {
      const start = input.indexOf("//");
      const end = input.indexOf("\\n");
      const customSeparator = input.slice(start + 2, end);
      const stringToSeparate = input.replace(input.slice(start, end + 2), "");
      return stringToSeparate.split(customSeparator).map(Number);
    } else if (hasCommaAndSemicolon) {
      return input
        .split(",")
        .flatMap((el) => el.split(";"))
        .map(Number);
    } else if (hasComma) {
      return input.split(comma).map(Number);
    } else if (hasSemicolon) {
      return input.split(semicolon).map(Number);
    } else Console.print("[ERROR]");
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
