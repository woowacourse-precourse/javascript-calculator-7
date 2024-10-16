import { Console } from "@woowacourse/mission-utils";

class App {
  #plusString;
  #plusNumberArray;
  #plusResult;
  #customSeparator;

  constructor() {
    this.#plusString = "";
    this.#plusNumberArray = [];
    this.#customSeparator = [];
  }

  async printPlusString() {
    const plusString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    // 예외 처리 부분
    // 구분자 이외 문자 포함시 거르기
    // 음수 거르기
    this.#plusString = plusString;
  }
  validatePlusString() {}
  printPlusResult() {
    Console.print(`결과 : ${this.#plusResult}`);
  }

  generateArrayPlusResult() {
    this.#plusResult = this.#plusNumberArray.reduce((acc, curr) => acc + curr);
  }

  generateZeroPlusResult() {
    this.#plusResult = 0;
  }

  generateCustomSeparator(partString) {
    if (typeof partString !== Number) {
      this.#customSeparator.push(partString);
    }
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

  isGenerateCustomSeparator(index) {
    if (
      this.#plusString[index] === "/" &&
      this.#plusString[index + 1] === "/" &&
      this.#plusString[index + 3] === "\\" &&
      this.#plusString[index + 4] === "n"
    ) {
      return true;
    }
    return false;
  }

  isContainCustomSeparator(partString) {
    let flag = false;
    for (let i = 0; i < this.#customSeparator.length; i++) {
      if (partString === this.#customSeparator[i]) {
        flag = true;
      }
    }
    return flag;
  }

  pushPlusNumberArray(tmpPlusNumber) {
    if (tmpPlusNumber !== "") {
      this.#plusNumberArray.push(Number(tmpPlusNumber));
    }
  }

  splitPlusString() {
    let tmpPlusNumber = "";
    for (let i = 0; i < this.#plusString.length; i++) {
      if (this.isContainBasicSeparator(this.#plusString[i])) {
        this.pushPlusNumberArray(tmpPlusNumber);
        tmpPlusNumber = "";
        continue;
      }
      if (this.isGenerateCustomSeparator(i)) {
        if (!this.isContainBasicSeparator(this.#plusString[i + 2])) {
          this.generateCustomSeparator(this.#plusString[i + 2]);
        }

        this.pushPlusNumberArray(tmpPlusNumber);
        tmpPlusNumber = "";

        i += 4;
        continue;
      }
      if (this.isContainCustomSeparator(this.#plusString[i])) {
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

  generatePlusResult() {
    if (this.isEmptyPlusString()) {
      this.generateZeroPlusResult();
    } else {
      this.splitPlusString();
      Console.print(this.#plusNumberArray);
      Console.print(this.#customSeparator);
      this.generateArrayPlusResult();
    }
  }
  async run() {
    await this.printPlusString();
    this.generatePlusResult();
    this.printPlusResult();
  }
}

export default App;
