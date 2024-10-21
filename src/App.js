import { Console } from "@woowacourse/mission-utils";

class App {
  inputRequestText() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
  }
  async run() {
    this.inputRequestText();
  }
}

export default App;
