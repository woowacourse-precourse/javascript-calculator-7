import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 사용자 입력
    const input = await Console.readLineAsync(
      "구분자와 양수로 구성된 문자열을 입력해주세요: "
    );
  }
}

export default App;
