import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.separator = [',', ':'];
  }

  async run() {
    try {
      const str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      if (this.hasWhitespace(str)) {
        throw new Error("[ERROR] 입력에 공백이 포함되어 있습니다.");
      }
      const numbers = this.extractNumbers(str);
      const sum = this.sumNumbers(numbers);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  hasWhitespace(str) {
    const pattern = /\s/;
    return pattern.test(str);
  }

  extractNumbers(str) {
    const regex = new RegExp(`[${this.separator.join('')}]`);
    return str.split(regex).map(Number);
  }

  sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default App;