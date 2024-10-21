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
      input = input.slice(5); // 커스텀 구분자 이후부터 처리
    }
    this.isValidate(input);

    const numbers = this.extractNumbers(input);
    const sum = this.calculateSum(numbers);
    return sum;
  }

  hasCustomDelimiter(input) {
    if (input.startsWith("//") && input.slice(3, 5) === "\\n") {
      const customDelimiter = input[2];

      if (!isNaN(customDelimiter) || customDelimiter.length != 1) {
        throw new Error("[ERROR] 유효하지 않은 커스텀 구분자입니다.");
      }

      this.delimiter.push(customDelimiter);

      return true;
    } else if (input.startsWith("//")) {
      // \n이 없는 경우
      throw new Error("[ERROR] 커스텀 구분자 지정 방식이 잘못되었습니다.");
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
    } else if (regex.test(input)) {
      throw new Error("[ERROR] 숫자, 구분자가 아닌 문자가 포함되어 있습니다. ");
    }
  }

  extractNumbers(input) {
    const regex = new RegExp(`[${this.delimiter.join("")}]`);
    const numbers = input.split(regex).map((str) => parseInt(str, 10));

    return numbers;
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
