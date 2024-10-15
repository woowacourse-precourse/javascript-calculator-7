import { Console } from "@woowacourse/mission-utils";

class App {
  printInitMessage() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
  }
  async run() {
    this.printInitMessage();
  }
}

export default App;
