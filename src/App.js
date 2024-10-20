import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    input = this.getSign(input);

    const numbers = this.parseNumbers(input);
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    Console.print(`결과 : ${sum}`);
  }

  constructor() {
    this.default = [",", ":"];
    this.sign = [...this.default];
  }

  getSign(input) {
    const prefix = "//";
    const suffix = "\\n";

    if (input.startsWith(prefix)) {
      const endIdx = input.indexOf(suffix);
      if (endIdx === -1) {
        throw new Error(
          "[ERROR] 커스텀 구분자가 올바르게 종료되지 않았습니다. //구분자\\n 형식을 확인하세요."
        );
      }

      const newDelimiters = input.slice(2, endIdx);
      this.sign.push(...newDelimiters.split(""));
      return input.slice(endIdx + suffix.length);
    }

    return input;
  }

  validation(char) {
    if (!this.sign.includes(char) && char !== "." && isNaN(Number(char))) {
      throw new Error(`[ERROR] 잘못된 문자 입력: (${char})`);
    }
  }

  parseNumbers(input) {
    let tempNum = "";
    const numbers = [];

    for (const char of input) {
      this.validation(char);

      if (this.sign.includes(char)) {
        numbers.push(Number(tempNum));
        tempNum = "";
      } else {
        tempNum += char;
      }
    }

    if (tempNum) {
      numbers.push(Number(tempNum));
    }

    return numbers;
  }
}

export default App;
