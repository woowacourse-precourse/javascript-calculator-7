import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    
    let userInput;
    let result = "";
    let spliter = new Set([",",":"]);
    userInput = String(await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n'));

    if(!this.isInputEmpty(userInput)) {
      userInput = this.checkCustomSpliter(userInput, spliter);
      result = this.doSum(userInput, spliter);
    }
    
    Console.print("결과 : " + Number(result));

  }

  isInputEmpty(userInput) {
    return userInput === '';
  }

  checkCustomSpliter(userInput, spliter) {

    if(userInput.includes("//")){

      let indexOfEnd = userInput.indexOf('\\n');
      if(indexOfEnd === -1) {
        throw new Error("[ERROR] 잘못된 문장. (커스텀 문장 추가 에러)"); 
      }
      for (let newSpliters of userInput.substring(2, indexOfEnd)) {
        spliter.add(newSpliters);
      }
      return userInput.substring(indexOfEnd + 2, userInput.length);
    }
    return userInput;
  }

  doSum(userInput, spliter) {
    let result = 0;
    let tmp = "";
    for(let idx of userInput) {
      if(!isNaN(idx)) {
        tmp += idx;
      }
      else{
        if(!spliter.has(idx)) {
          throw new Error("[ERROR] 잘못된 문장. (구분자가 아닌 문자 사용)");
        } 
        result += Number(tmp)
        tmp = "";
      }
      
    }
    result += Number(tmp);
    return result;
  }

}

export default App;
