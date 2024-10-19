import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.separators = [",", ":"]; // 기본 구분자
  }

  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 입력이 비어있으면 0 출력
    if (this.isEmptyInput(input)) {
      Console.print("결과 : 0");
      return;
    }
  }

  isEmptyInput(input) {
    return input.trim() === ""; // 비어있음 체크
  }
}

export default App;
