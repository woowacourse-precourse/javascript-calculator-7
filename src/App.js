import { Console } from "@woowacourse/mission-utils";

class App {
  #plusString;
  #plusNumberArray;
  #plusResult;

  constructor() {
    this.#plusString = "";
    this.#plusNumberArray = [];
  }

  async generatePlusString() {
    const plusString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    this.#plusString = plusString;
  }

  generatePlusResult() {
    this.#plusResult = this.#plusNumberArray.reduce((acc, curr) => acc + curr);
  }

  generateZeroPlusResult() {
    this.#plusResult = 0;
  }

  printPlusResult() {
    Console.print(`결과 : ${this.#plusResult}`);
  }

  isEmptyPlusString() {
    if (this.#plusString === "") {
      return true;
    }
    return false;
  }

  isContainBasicSeparator(partString) {
    if (partString === "," || partString === ":") {
      return true;
    }
    return false;
  }

  pushPlusNumberArray(tmpPlusNumber) {
    this.#plusNumberArray.push(Number(tmpPlusNumber));
  }

  splitPlusString() {
    let tmpPlusNumber = "";
    for (let i = 0; i < this.#plusString.length; i++) {
      if (this.isContainBasicSeparator(this.#plusString[i])) {
        this.pushPlusNumberArray(tmpPlusNumber);
        tmpPlusNumber = "";
        continue;
      }
      tmpPlusNumber += this.#plusString[i];
      if (i === this.#plusString.length - 1) {
        this.pushPlusNumberArray(tmpPlusNumber);
      }
    }
  }

  async run() {
    await this.generatePlusString();
    if (this.isEmptyPlusString()) {
      this.generateZeroPlusResult();
    } else {
      this.splitPlusString();
      Console.print(this.#plusNumberArray);
      this.generatePlusResult();
    }
    this.printPlusResult();
  }
}

export default App;
