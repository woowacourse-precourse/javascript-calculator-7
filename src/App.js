import { Console } from "@woowacourse/mission-utils";

class App {
  // 클래스 내 변수 선언
  constructor() {
    this.separators = [",", ":"];
  }

  async run() {
    // 입력 받기
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 빈 문자열 처리
    if (input === "") {
      return Console.print("결과 : 0");
    }

    // 구분자 처리
    for (const separator of this.separators) {
      input = input.split(separator).join(",");
    }
  }
}

export default App;
