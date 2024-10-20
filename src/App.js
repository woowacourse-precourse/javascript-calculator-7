import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    var input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력하세요.");
    const stringAdder = new stringAdder(input);
    stringAdder.doCalculator();
  } 
}

export default App;
