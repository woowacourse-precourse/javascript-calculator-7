import { Console } from "@woowacourse/mission-utils";
import { separatorSplit } from "./utils.js";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    let numbers = separatorSplit(input);

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
