import { Console } from "@woowacourse/mission-utils";

class App {
  delimiter = [",", ":"];

  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
    const result = this.processInput(input);

    Console.print(`결과 : ${result}`);
  }

  processInput(input) {
    if (input === "") {
      return 0;
    }

    if (this.hasCustomDelimiter(input)) {
      input = input.slice(5);
    }
    this.isValidate(input);

    const numbers = this.extractNumbers(input);
    const sum = this.calculateSum(numbers);
    return sum;
  }

  hasCustomDelimiter(input) {
    if (input.startsWith("//") && input.slice(3, 5) === "\\n") {
      const customDelimiter = input[2];
      this.delimiter.push(customDelimiter);

      return true;
    }
    return false;
  }

  isValidate(input) {
    const allowedCharacters = `[0-9${this.delimiter.join("")}\\n]`;
    const regex = new RegExp(`[^${allowedCharacters}]`);

    if (input.includes(" ")) {
      throw new Error("[ERROR] 공백이 포함되어 있습니다.");
    } else if (input.includes("-")) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    } else if (input.includes("//") && input.slice(3, 5) !== "\\n") {
      throw new Error("[ERROR] 커스텀 구분자 지정 방식이 잘못되었습니다.");
    } else if (!isNaN(Number(this.delimiter[2]))) {
      throw new Error("[ERROR] 커스텀 구분자가 숫자입니다.");
    } else if (this.delimiter[2].length > 1) {
      throw new Error("[ERROR] 구분자가 여러개입니다.");
    } else if (this.delimiter[2] === "") {
      throw new Error("[ERROR] 구분자가 없습니다.");
    } else if (regex.test(input)) {
      throw new Error("[ERROR] 숫자, 구분자가 아닌 문자가 포함되어 있습니다 ");
    }
  }

  extractNumbers(input) {
    const regex = new RegExp(`[${this.delimiter.join(" ")}]`);
    const numbers = input.split(regex).map((str) => parseInt(str, 10));

    return numbers;
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
