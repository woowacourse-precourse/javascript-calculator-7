import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/message.js";
import { ERROR } from "./constants/error.js";


class App {
  async run() {
    await this.calculator();
  }

  async calculator() {
    const inputStr = await this.inputString();
  }
  async inputString() {
    const input = await Console.readLineAsync(MESSAGE.INPUT); // 문자열을 입력받는다.
    this.validate(input); //유효성 검사
    return input;
    
  }

   validate(input) {
    if (!input){ // 입력값이 없는 경우.
      throw new Error(ERROR.INPUT_BLANK_ERROR);
    }

    if(input.startsWith("//")){ //커스텀 구분자를 사용하는 경우
      const checkNum = input.split("\\n");
      if(checkNum < 2){
        throw new Error(ERROR.INPUT_NUMBER_TYPE);
      } 
      const Delimiter = checkNum[0].substring(2,);
      if(!Delimiter){ // 커스텀 구분자가 없을 경우
        throw new Error(ERROR.INPUT_NO_CUSTOMDELIMITER);
      }
    } else {
      for(let x of input.split(/,|:/)){
        if(isNaN(x) || x < 0){ //숫자가 아니거나 음수일 경우
          throw new Error(ERROR.INPUT_NUMBER_TYPE);
        }
      }      
    }


   }

}

export default App;
