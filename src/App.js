import { Console } from "@woowacourse/mission-utils";

class App {
  input = "";
  result = 0;

  async run() {
    this.start();
    this.resultPrint();
  }
  
  async start() {
    this.input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  async resultPrint() {
    Console.print(`결과 : ${this.result}`);
  }
}

export default App;
