import { MissionUtils } from "@woowacourse/mission-utils";
import {StringAdder} from "./StringAdder.js";
class App {
  async run() {
    var input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력하세요.");
    //var input = "//;\n1;2;3";
    const stringAdder = new StringAdder(input);
    stringAdder.doCalculator();
  } 
}

export default App;
