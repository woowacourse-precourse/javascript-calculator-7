import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.separator = [',', ':'];
  }

  async run() {
    try {
      let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      if (this.hasWhitespace(input)) {
        throw new Error("[ERROR] 입력에 공백이 포함되어 있습니다.");
      }
      if(this.hasMinus(input)) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
      input = this.hasCustomSeparator(input)
      const numbers = this.extractNumbers(input);
      const sum = this.sumNumbers(numbers);
      if (isNaN(sum)) {
        throw new Error("[ERROR] 결과가 숫자가 아닙니다.");
      }
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  hasCustomSeparator(str) {
    if (str.startsWith('//') && str.includes('\\n')) {
      if(isNaN(str[2])) {
        this.separator.push(str[2]);
        return str.slice(5);
      }
      else {
        throw new Error("[ERROR] 커스텀 구분자가 숫자입니다.");
      }
    }
    return str;
  }

  hasMinus(str) {
    const pattern = /-/;
    return pattern.test(str);
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