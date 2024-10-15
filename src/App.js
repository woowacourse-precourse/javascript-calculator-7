import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/message.js";
import { ERROR } from "./constants/error.js";


class App {
  async run() {
    this.startInput();
  }

  startInput() {
    const inputStr = this.inputString();

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

    if(input[0] && input[1] === '/'){ //커스텀 구분자를 사용하는 경우
      if(!input.includes("\n")){
        throw new Error(ERROR.INPUT_DELIMITER_TYPE);
      } 
    }

    for(let x of input.split(/,|:/)){
      if(isNaN(x) || x < 0){ //숫자가 아니거나 음수일 경우
        throw new Error(ERROR.INPUT_NUMBER_TYPE);
      }
    }
   }

  


}

export default App;
