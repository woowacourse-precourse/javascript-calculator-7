import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
class App {
  async run() {
    const input = await this.getString();
    if (!input.length) return this.printAnswer(0);

    const [separators, numberString] = this.getSeparatorAndNumber(input);

    if (separators === null) {
      return this.printError("올바르지 않은 커스텀 구분자 형식입니다.");
    }

    const regex = this.changeToRegex(separators);
    const numbers = this.getNumberCutWithSeparator(regex, numberString);

    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];

      if (i === 0 && num === "") {
        return this.printError("첫 글자가 구분자일 수 없습니다.");
      }

      if (i === numbers.length - 1 && num === "") {
        return this.printError("마지막 글자가 구분자일 수 없습니다.");
      }

      if (num === "") {
        return this.printError("구분자를 연속해서 작성할 수 없습니다.");
      }

      if (num.includes(" ")) {
        return this.printError(
          "구분자와 구분자 사이에 공백문자가 들어가 있습니다."
        );
      }

      if (isNaN(Number(num))) {
        return this.printError("숫자가 아닌 다른 값이 포함되어 있습니다.");
      }

      if (Number(num) < 0) {
        return this.printError("음수는 입력할 수 없습니다.");
      }
    }

    const sum = this.calculateSum(numbers);
    return this.printAnswer(sum);
  }

  getString() {
    return Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
  }
  getSeparatorAndNumber(str) {
    const separators = [",", ":"];
    if (str.startsWith("//")) {
      const customSeparator = this.findCustomSeparator(str);
      if (customSeparator === null) return [null, str];
      separators.push(customSeparator);
      return [separators, str.substr(5)];
    }
    return [separators, `${str}`];
  }

  findCustomSeparator(str) {
    if (str[3] === "\\" && str[4] === "n") return str[2];
    return null;
  }
  changeToRegex(separators) {
    return new RegExp(separators.join("|"), "g");
  }
  getNumberCutWithSeparator(regex, str) {
    return str.split(regex);
  }
  calculateSum(arr) {
    return arr.reduce((acc, cur) => acc + +cur, 0);
  }
  printAnswer(sum) {
    Console.print(`결과 : ${sum}`);
  }
  printError(error) {
    throw new Error(`[ERROR] ${error}`);
  }
  validate() {}
}

export default App;
