import { Console } from "@woowacourse/mission-utils";

class App {
  #text;

  plus(n1, n2) {
    return BigInt(n1) + BigInt(n2);
  }

  sum(array) {
    return array.reduce((total, number) => this.plus(total, number), 0);
  }

  print(result) {
    Console.print(`결과 : ${result}`);
  }

  async run() {
    this.#text = (
      await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    ).trim();

    if (this.#text === "") {
      this.print(0);
      return;
    }

    let separatorRegex = ",|;";

    const allSeparatorRegex = new RegExp(separatorRegex, "g");
    const numbers = this.#text.split(allSeparatorRegex);

    const result = this.sum(numbers);

    this.print(result);
  }
}

export default App;
