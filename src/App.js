import { MissionUtils } from "@woowacourse/mission-utils";
import { readLineAsync } from "./utils/readLineAsync.js";
import { print } from "./utils/print.js";
import { calculateSum } from "./utils/calculateSum.js";
import { handleError } from "./utils/errorHandler.js";

class App{
  async run() {
    try {
      const input = await readLineAsync("덧셈할 문자열을 입력해주세요.");
      const result = calculateSum(input);
      print(`${result}`);
      process.stdin.pause();
    } catch (error){
      handleError(error);
      process.stdin.pause();
    }
  }

}
export default App;
