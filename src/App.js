import { Console } from "@woowacourse/mission-utils";

class App {
  input = "";

  async run() {
    this.start();
  }
  
  async start() {
    this.input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }
}

export default App;
