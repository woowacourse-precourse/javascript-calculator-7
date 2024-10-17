import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈을 입력하세요");
    const userInput = await MissionUtils.Console.readLineAsync("");
    const divider = /[:,]/;
    const numberList = userInput.split(divider).map(parseInt(x));
  }
}

export default App;
