import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (
      inputString.slice(0, 5).startsWith("//") &&
      inputString.slice(0, 5).endsWith("\\n")
    ) {
      const customSeparator = inputString[2];

      Console.print(
        `결과 : ${this.stringSplitSumCalc(
          inputString.slice(5),
          customSeparator
        )}`
      );
    } else {
      Console.print(`결과 : ${this.stringSplitSumCalc(inputString)}`);
    }
  }

  stringSplitSumCalc(string, customSeparator) {
    console.log(customSeparator);
    let separatedArray = string.split(/[,:]/g);
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
}

export default App;
