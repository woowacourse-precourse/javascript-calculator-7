import { Console } from "@woowacourse/mission-utils";
import { WRONG_SEPARATOR, WRONG_NUMBER } from "./constants/errorMessage.js";
import { IS_MINUS } from "./constants/numberMessage.js";

class App {
  #plusString;
  #plusResult;
  #separatorList;

  constructor() {
    this.#plusString = "";
    this.#plusResult = 0;
    this.#separatorList = [",", ":"];
  }

  async printPlusString() {
    const plusString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return plusString;
  }
  generatePlusString(plusString) {
    this.#plusString = plusString;
  }

  isEmptyString() {
    if (this.#plusString === "") {
      return true;
    }
    return false;
  }

  checkCustomPattern(originPlusString) {
    let plusString = originPlusString;
    const CUSTOM_PATTERN = /\/\/([^-])\\n/g;

    const customSeparator = plusString.match(CUSTOM_PATTERN);
    if (customSeparator) {
      plusString = plusString.replace(CUSTOM_PATTERN, ",");
      customSeparator.forEach((entireSeparator) => {
        const separator = entireSeparator
          .split("")
          .filter((item) => item !== "/" && item !== "\\" && item !== "n")
          .join("");
        this.#separatorList.push(separator);
      });
    }

    return plusString;
  }

  generateSeparatorRegExp() {
    const separators = this.#separatorList.join("");
    const separatorRegex = new RegExp(`[${separators}]+`, "g");
    return separatorRegex;
  }

  filterNumber(separatorRegex, plusString) {
    const numberList = plusString.split(separatorRegex).map(Number);
    for (let i = 0; i < numberList.length; i++) {
      if (isNaN(numberList[i])) {
        throw new Error(WRONG_SEPARATOR);
      }
      if (Math.sign(numberList[i]) === IS_MINUS) {
        throw new Error(WRONG_NUMBER);
      }
    }
    return numberList;
  }

  generatePlusResult() {
    let plusString = this.#plusString;
    plusString = this.checkCustomPattern(plusString);
    const separatorRegex = this.generateSeparatorRegExp();
    const numberList = this.filterNumber(separatorRegex, plusString);
    this.#plusResult = numberList.reduce((acc, curr) => acc + curr);
  }

  printPlusResult() {
    Console.print(`결과 : ${this.#plusResult}`);
  }

  async run() {
    const plusString = await this.printPlusString();
    this.generatePlusString(plusString);

    if (!this.isEmptyString()) {
      this.generatePlusResult();
    }

    this.printPlusResult();
  }
}

export default App;
