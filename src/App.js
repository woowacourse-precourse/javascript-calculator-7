import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    let input = await Console.readLineAsync("덧셈함 문자열을 입력해 주세요.\n");
    let result = 0;
    Console.print(result);
  }
}

export default App;
