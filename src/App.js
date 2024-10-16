import { Console } from "@woowacourse/mission-utils";

class App {
  #text;

  plus(n1, n2) {
    return BigInt(n1) + BigInt(n2);
  }

  sum(array) {
    return array.reduce((total, number) => this.plus(total, number), 0);
  }

  isNaturalNumber(n) {
    return isNaN(Math.sign(n));
  }

  isPositiveNumber(n) {
    return Math.sign(n) > 0;
  }

  print(result) {
    Console.print(`결과 : ${result}`);
  }

  throwErrorMessage(msg) {
    throw new Error(`[ERROR] ${msg}`);
  }

  async run() {
    this.#text = (
      await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    ).trim();

    if (this.#text === "") {
      this.print(0);
      return;
    }

    const captureCustomRegex = /\/\/(.+?)\\n/g;
    const custom = [...this.#text.matchAll(captureCustomRegex)];
    let separatorRegex = ",|;";

    if (custom && custom.length > 0) {
      custom.forEach(([caturedString, separator]) => {
        this.#text = this.#text.substring(caturedString.length);

        separatorRegex += `|${separator}`;
      });
    }

    const allSeparatorRegex = new RegExp(separatorRegex, "g");
    const numbers = this.#text.split(allSeparatorRegex);

    for (const n of numbers) {
      if (n === "") {
        this.throwErrorMessage("구분자의 앞 또는 뒤에 숫자를 입력하세요");
      }

      if (this.isNaturalNumber(n)) {
        this.throwErrorMessage("가능한 구분자가 아닙니다");
      }

      if (!this.isPositiveNumber(n)) {
        this.throwErrorMessage("양수를 입력하세요");
      }
    }

    const result = this.sum(numbers);

    this.print(result);
  }
}

export default App;
