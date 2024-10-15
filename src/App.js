import { MissionUtils } from "@woowacourse/mission-utils";
import { printOuput, readInput } from "./utils.js";

class App {
  async run() {
    const inputValue = await readInput("덧셈할 문자열을 입력해 주세요.\n");
    printOuput(inputValue);
  }
}

export default App;
