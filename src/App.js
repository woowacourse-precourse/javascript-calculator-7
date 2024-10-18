import { MissionUtils } from "@woowacourse/mission-utils";
import { readLineAsync } from "./utils/readLineAsync";
import { print } from "./utils/print";
import { calculateSum } from "./utils/calculateSum";

class App{
  async run() {
    const input = await readLineAsync("덧셈할 문자열을 입력해주세요.");
    const result = calculateSum(input);
    print(`${result}`);
  }
}
export default App;
