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
      return this.splitAndConvertToNumbers(stringToSeparate, customSeparator);
    } else if (hasCommaAndSemicolon) {
      return this.splitAndConvertToNumbers(input, [comma, semicolon]);
    } else if (hasComma) {
      return this.splitAndConvertToNumbers(input, comma);
    } else if (hasSemicolon) {
      return this.splitAndConvertToNumbers(input, semicolon);
    } else Console.print("[ERROR]");
  }

  splitAndConvertToNumbers(input, separator) {
    if (typeof separator === "object") {
      return input
        .split(separator[0])
        .flatMap((el) => el.split(separator[1]))
        .map(Number);
    } else return input.split(separator).map(Number);
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
