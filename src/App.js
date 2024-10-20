import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //입력 처리
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const addNumber = await Console.readLineAsync("");
  }
}

export default App;
