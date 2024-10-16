import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (input === "") {
      throw new Error("[ERROR] 문자열을 입력해주세요");
    }

    let delimiters = /,|:/;
    let customDelimiter = input.match(/\/\/(.*?)\\n/);

    if (customDelimiter) {
      const slicedInput = input.slice(5);
      const reg = new RegExp(`[^0-9${customDelimiter[1]}]`);

      if (reg.test(slicedInput)) {
        throw new Error("[ERROR] 올바른 커스텀 구분자를 입력하세요.");
      }

      delimiters = new RegExp(customDelimiter[1]);
      input = slicedInput;
    }
    let numArray = input.split(delimiters);

    let sum = 0;

    for (let num of numArray) {
      if (isNaN(Number(num)) || Number(num) < 0) {
        throw new Error("[ERROR] 올바른 구분자를 입력하세요.");
      }

      sum += parseInt(num);
    }

    return Console.print(`결과 : ${sum}`);
  }
}

export default App;
