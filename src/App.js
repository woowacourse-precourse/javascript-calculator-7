import { Console } from "@woowacourse/mission-utils";

class Calulator {
  add(input) {
    if (input === "") {
      return 0;
    }

    const delimiters = /[,:]/;
    const numbers = input.split(delimiters);

    const sum = numbers.reduce((total, current) => {
      const number = parseInt(current, 10);
      if (isNaN(number)) {
        throw new Error("[ERROR] 잘못된 입력값이 포함되어 있습니다.");
      }
      return total + number;
    }, 0);

    return sum;
  }
}

class App {
  constructor() {
    this.calulator = new Calulator();
  }

  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calulator.add(input);
      Console.print(`결과 : ${result}`);

    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
