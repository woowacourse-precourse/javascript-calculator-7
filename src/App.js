import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    try {
      Console.print(`결과 : ${this.addNumber(input)}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  addNumber(input) {
    const possible = [":", ","];
    let cutInput = input;

    if (input.substr(0, 2) === "//") {
      possible.push(input[2]);
      cutInput = input.substr(5);
    }

    let numArray = [cutInput];

    for (let p of possible) {
      let tempArray = [];
      for (let item of numArray) {
        tempArray.push(...item.split(p));
      }
      numArray = tempArray;
    }

    const result = numArray.reduce((a, b) => {
      const num1 = Number(a);
      const num2 = Number(b);
      if (num1 < 0) {
        throw new Error("[ERROR] 음수는 처리되지 않습니다.");
      }
      return num1 + num2;
    }, 0);

    if (isNaN(result)) {
      throw new Error("[ERROR] 잘못된 값을 입력했습니다.");
    }
    return result;
  }
}

export default App;
