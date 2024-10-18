import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

class App {
  constructor() {
    this.answer = "";
  }

  async run() {
    await this.input();
  }

  // "덧셈할 문자열을 입력해 주세요."란 문장의 출력과 함께 문자열을 입력 받습니다.
  input() {
    Console.readLine("덧셈할 문자열을 입력해 주세요.\n", (answer) => {
      this.answer = answer;
    });
  }
}

export default App;
