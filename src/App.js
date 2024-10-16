import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/message.js";
import { validate } from "./utils/validate.js";
import { getCustomTotal } from "./utils/getCustomTotal.js";
import { getBasicTotal } from "./utils/getBasicTotal.js";


class App {
  async run() {
    await this.calculator();
  }

  async calculator() {
    const inputStr = await this.inputString();
    const answer = this.getTotal(inputStr);
    Console.print(`결과 : ${answer}`);
  }
  async inputString() {
    const input = await Console.readLineAsync(MESSAGE.INPUT); // 문자열을 입력받는다.
    validate(input); //유효성 검사
    return input;
    
  }
   getTotal(arr) {
    var total = 0;
    if(arr.startsWith("//")){
      total = getCustomTotal(arr);
    } else { // 기본 구분자를 통한 합
      total = getBasicTotal(arr);
    }
    return total;
   }

}

export default App;
