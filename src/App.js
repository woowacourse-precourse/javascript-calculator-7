import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const result = this.calculate(input);

    Console.print(`결과 : ${result}`);
  }

  calculate(str) {
    if (this.isEmptyStr(str)) {
      return 0;
    }

    const separators = [",", ":"];
    let newStr = str;

    if (this.isCustomSeparator(str)) {
      const customSeparator = this.getCustomSeparator(str);
      separators.push(customSeparator);
      newStr = this.parseStrWithCustomSeparator(str);
    }

    const separatedArr = this.separateStr(newStr, separators);

    if (this.isNegativeValue(separatedArr)) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }

    const result = this.sum(separatedArr);

    if (Number.isNaN(result) || Number.isInteger(result) === false) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    return result;
  }

  isEmptyStr(str) {
    return str.trim() === "";
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
