import { Console } from "@woowacourse/mission-utils";
import { checkNum, checkIsBasicMinus, checkIsCustomMinus, checkSeparator } from "./validate.js";
class App {
  async run() {
    let string = await this.getString();
    
    let result = await this.calcAfterUserInput(string);
    
    Console.print("결과 : "+ result);
  }

  // 사용자 입력 받기
  async getString() {
    try {
      let userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      this.checkUserInputValidation(userInput);
      return userInput;
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
  
  //입력값의 종류 구분후 계산
  async calcAfterUserInput(userInput) {
    if (!userInput) { // 입력값이 ""이면 0을 출력
      return 0;
    }
    else {
      let customs = await this.customSeparator(userInput); // customs가 0이면 커스텀 구분자가 아니므로 기본 덧셈 진행
      if (customs == 0) {
        return await this.basicSumNums(userInput);
      }
      else {
        return await this.customSumNums(userInput);
      }
    }
  }

  // 사용자 입력값이 유효값인지 확인
  checkUserInputValidation(userInput) {
    if (!checkNum(userInput)) {
      throw new Error("[ERROR]");
    }
    if (!checkIsCustomMinus(userInput)) {
      throw new Error("[ERROR]");
    }
    if (!checkIsBasicMinus(userInput)) {
      throw new Error("[ERROR]");
    }
    if (!checkSeparator(userInput)) {
      throw new Error("[ERROR]");
    }
    return true;
  }

  // 쉼표와 콜론 덧셈
  basicSumNums(arrayString) {
    let nums = arrayString.split(/,|:/).map(function(num){return parseInt(num);});
    return nums.reduce((a, b) => a + b);
  }

  // 커스텀 구분자 추출과 '//'과 '\n'이 없으면 0을 반환
  customSeparator(arrayString) {
    if (arrayString.indexOf('//') == 0 && arrayString.indexOf('\\n') != -1) {
      return arrayString.substring(arrayString.indexOf('//') + 2, arrayString.indexOf('\\n'));
    }
    else {
      return 0;
    }
  }
  
  // 커스텀 구분자가 있을 때 덧셈
  customSumNums(arrayString) {
    let customNums = arrayString.substring(arrayString.indexOf('\\n')+2);
    customNums = customNums.split(this.customSeparator(arrayString)).map(function(num){return parseInt(num);});
    return customNums.reduce((a, b) => a + b);
  }
}

export default App;
