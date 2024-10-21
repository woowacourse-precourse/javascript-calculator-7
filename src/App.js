const { Console } = require("@woowacourse/mission-utils");
class App {
  async run() {
    // 사용자로부터 입력을 받는 비동기 함수
    async function getUserInput() {
      return await Console.readLineAsync("덧셈할 숫자를 입력해 주세요.\n");
    }
    // 사용자 입력을 받고 검증 실행
    const userInput = await getUserInput();
    }
}

export default App;
