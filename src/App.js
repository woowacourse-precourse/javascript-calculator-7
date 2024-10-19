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

  async run() {
    const plusString = await this.readPlusString();
    this.generatePlusString(plusString);

    if (this.isNotEmptyString()) {
      this.generatePlusResult();
    }

    this.printPlusResult();
  }

  async readPlusString() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  generatePlusString(plusString) {
    this.#plusString = plusString;
  }

  isNotEmptyString() {
    return this.#plusString !== "";
  }

  generatePlusResult() {
    let plusString = this.#plusString;
    plusString = this.checkCustomPattern(plusString);
    const separatorRegex = this.generateSeparatorRegExp();
    const numberList = this.filterNumber(separatorRegex, plusString);
    this.#plusResult = numberList.reduce((acc, curr) => acc + curr);
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

  printPlusResult() {
    Console.print(`결과 : ${this.#plusResult}`);
  }
}

export default App;
