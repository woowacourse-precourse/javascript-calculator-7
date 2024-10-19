import { Console } from "@woowacourse/mission-utils";

class App {
  validateInput(input) {
    const sep = /[^0-9,:]/;
    const customSep = /^\/\/\D\\n/;

    if (!sep.test(input)) {
      return 0;
    } else if (customSep.test(input)) {
      const pattern = new RegExp(`[^0-9${input[2]}]`);
      if (!pattern.test(input.slice(5))) {
        return 1;
      }
    }

    return -1;
  }

  convertToNumberArray(input, sep) {
    return input.split(sep).map(Number);
  }

  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    let sum = 0;

    if (this.validateInput(input) === 0) {
      const numArr = this.convertToNumberArray(input, /[,:]/);
      numArr.forEach((num) => {
        sum += num;
      })
    } else if (this.validateInput(input) === 1) {
      const numArr = this.convertToNumberArray(input.slice(5), input[2]);
      numArr.forEach((num) => {
        sum += num;
      })
    } else {
      throw new Error("[ERROR]: 잘못된 값을 입력했습니다");
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
