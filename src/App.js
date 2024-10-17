import { Console } from "@woowacourse/mission-utils";
import { getCustomDelimiter } from "./getCustomDelimiter";

class App {
  async run() {
    const INPUT_MESSAGE = await Console.readLineAsync();
    let delimiters = [",", ":"];

    delimiters.push(getCustomDelimiter(INPUT_MESSAGE));
    let delimeter = new RegExp(delimiters.join("|"));

    const answer = INPUT_MESSAGE.split(delimeter)
      .map(Number)
      .slice(5)
      .reduce((a, c) => a + c, 0);

    Console.print(`결과 : ${answer}`);
  }
}

export default App;
