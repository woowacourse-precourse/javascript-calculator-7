import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 1. 사용자 입력받기
      // 1-1. 사용자에게 문자열 입력받기
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      // 1-2. input이 빈 문자열이나 공백인 경우 0 반환 후 종료
      if (input.trim() === "") {
        return 0;
      }
    } catch (error) {}
  }
}

export default App;
