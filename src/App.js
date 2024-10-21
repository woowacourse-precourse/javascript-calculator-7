import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
class App {
  async run() {
    const input = await this.getString();
    if (!input.length) return this.printAnswer(0);

    const [separators, numberString] = this.getSeparatorAndNumber(input);
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
  changeToRegex() {}
  getNumberCutWithSeparator() {}
  calculateSum() {}
  printAnswer() {}
  printError() {}
  validate() {}
}

export default App;
