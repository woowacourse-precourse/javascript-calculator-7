import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const USER_INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
    //console.log(USER_INPUT);
    //console.log(typeof(USER_INPUT));
  }
}

const APP = new App();
APP.run();

export default App;