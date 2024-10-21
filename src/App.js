import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    try {
      Console.print(`결과: ${this.addNumber(input)}`);
    } catch {}
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
    return numArray.reduce((a, b) => Number(a) + Number(b), 0);
  }
}

export default App;
