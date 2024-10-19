import { Console } from "@woowacourse/mission-utils";
import { findSeparator } from "./utils/findSeparator.js";
import { calculate } from "./utils/calculate.js";

class App {
  async run(
  ) {
    let result;
    let input = '';
    Console.print("덧셈할 문자열을 입력해 주세요.");
    input = await Console.readLineAsync(input);

    if(input.length === 0){
      result = 0;
    } else {
      result = calculate(findSeparator(input))
    }

    Console.print(`결과 : ${result}`);
  }
}

export default App;