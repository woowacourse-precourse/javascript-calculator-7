import { Console } from "@woowacourse/mission-utils";
import { WRONG_SEPARATOR, WRONG_NUMBER } from "./constants/errorMessage.js";

class App {
  #plusString;
  #plusNumberArray;
  #plusResult;
  #separatorList;

  constructor() {
    this.#plusString = "";
    this.#plusResult = 0;
    this.#plusNumberArray = [];
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

  printPlusResult() {
    Console.print(`결과 : ${this.#plusResult}`);
  }

  isEmptyString() {
    if (this.#plusString === "") {
      return true;
    }
    return false;
  }

  generatePlusResult() {
    let plusString = this.#plusString;

    // custom pattern
    const CUSTOM_PATTERN = /\/\/(.)\\n/g;
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

    // basic pattern
    const separators = this.#separatorList.join("");
    const separatorRegex = new RegExp(`[${separators}]+`, "g");
    const numberList = plusString.split(separatorRegex).map(Number);
    Console.print(numberList);

    // validate number list
    for (let i = 0; i < numberList.length; i++) {
      if (isNaN(numberList[i])) {
        throw new Error(WRONG_SEPARATOR);
      }
      if (Math.sign(numberList[i]) === -1) {
        throw new Error(WRONG_NUMBER);
      }
    }
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
