import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const string = await this.getString();
    // Console.print(string); 테스트용 출력
  }

  // 사용자 입력 받기
  async getString() {
    try {
      const string = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      return string;
    } catch (error) {
      
    }
  }
}

export default App;
