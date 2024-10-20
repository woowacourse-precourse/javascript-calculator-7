import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (input.trim() === "") {
      Console.print("결과 : 0");
      return;
    }

    const separators = [",", ":"];
    let str = input;

    if (this.isCustomSeparator(input)) {
      const customSeparator = this.getCustomSeparator(input);
      separators.push(customSeparator);
      str = this.parseStrWithCustomSeparator(input);
    }

    const separatedArr = this.separateStr(str, separators);

    if (this.isNegativeValue(separatedArr)) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }

    const result = this.sum(separatedArr);

    if (Number.isNaN(result) || Number.isInteger(result) === false) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    Console.print(`결과 : ${result}`);
  }

  isCustomSeparator(str) {
    return str.includes("//") && str.includes("\\n");
  }

  getCustomSeparator(str) {
    return str.split("//")[1].split("\\n")[0];
  }

  parseStrWithCustomSeparator(str) {
    return str.split("\\n")[1];
  }

  isNegativeValue(arr) {
    return arr.some((value) => +value < 0);
  }

  separateStr(str, separators) {
    let newStr = str;
    separators.forEach((separator) => {
      const regex = new RegExp(`[${separator}]`, "g");
      newStr = newStr.replace(regex, ",");
    });
    const arr = newStr.split(",");
    return arr;
  }

  sum(arr) {
    return arr.reduce((acc, cur) => acc + +cur, 0);
  }
}

export default App;
