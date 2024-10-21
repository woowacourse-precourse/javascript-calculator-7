import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
class App {
  async run() {
    const input = await this.getString();
    if (!input.length) return this.printAnswer(0);

    const [separators, numberString] = this.getSeparatorAndNumber(input);
    const regex = this.changeToRegex(separators);
    const numbers = this.getNumberCutWithSeparator(regex, numberString);
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
