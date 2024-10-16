import { Console } from "@woowacourse/mission-utils";
import Messages from "./constants/Messages.js";

class App {
  async run() {
    // 입력 메세지 출력 및 입력 받기
    const INPUT = await Console.readLineAsync(Messages.INPUT_MESSAGE);

    //Console.print(INPUT);
  }
}

export default App;
