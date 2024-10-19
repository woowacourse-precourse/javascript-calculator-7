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
    }
    if (hasCommaAndSemicolon)
      return this.splitAndConvertToNumbers(input, [comma, semicolon]);
    if (hasComma) return this.splitAndConvertToNumbers(input, comma);
    if (hasSemicolon) return this.splitAndConvertToNumbers(input, semicolon);
    return Console.print("[ERROR]");
  }

  splitAndConvertToNumbers(input, separator) {
    if (typeof separator === "object") {
      const [comma, semicolon] = separator;
      return input
        .split(comma)
        .flatMap((el) => el.split(semicolon))
        .map(Number);
    } else return input.split(separator).map(Number);
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
