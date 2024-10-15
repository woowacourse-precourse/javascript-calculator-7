import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const customSeparator = this.hasCustomSeparator(inputString);

    Console.print(
      `결과 : ${this.stringSplitSumCalc(inputString, customSeparator)}`
    );
  }

  stringSplitSumCalc(string, customSeparator) {
    let separatedArray = customSeparator
      ? string.slice(5).split(/[,:]/g)
      : string.split(/[,:]/g);

    if (customSeparator) {
      separatedArray = separatedArray
        .map((str) => str.split(customSeparator))
        .flat();
    }

    return separatedArray.reduce(
      (sum, str) => sum + this.validateNumber(str),
      0
    );
  }

  validateNumber(string) {
    if (Number(string) === NaN) {
      throw new Error("[ERROR] 숫자가 아닌 값을 입력했습니다");
    }
    if (Number(string) < 0) {
      throw new Error("[ERROR] 음수를 입력했습니다");
    }

    return Number(string);
  }

  hasCustomSeparator(string) {
    if (
      string.slice(0, 5).startsWith("//") &&
      string.slice(0, 5).endsWith("\\n")
    ) {
      return string[2];
    }

    return null;
  }
}

export default App;
