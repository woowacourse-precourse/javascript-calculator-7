import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputContents = await Console.readLineAsync("입력값을 입력해주세요.");
    console.log(inputContents);
  }
}

export default App;
