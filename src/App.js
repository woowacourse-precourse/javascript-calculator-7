import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    
    let userInput;
    let result = 0;
    while(true){
      let spliter = new Set([",",":"]);
      userInput = await Console.readLineAsync('');

      if(!this.isEmpty(userInput)) {
        userInput = this.checkCustomSpliter(userInput, spliter);
        
      }

    }

  }

  isEmpty(userInput) {
    return userInput === '';
  }
  checkCustomSpliter(userInput, spliter) {
    if(userInput.substring(0,2) === "//"){
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
}

export default App;
