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
    this.splitPlusString();
    Console.print(this.#plusNumberArray);
    this.generatePlusResult();
  }
}

export default App;
