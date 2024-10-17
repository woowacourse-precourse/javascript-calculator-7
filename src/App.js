import { Console } from "@woowacourse/mission-utils";
import { checkNum, basicCheckIsMinus, customCheckIsMinus, checkSeparator } from "./validate.js";
class App {
  async run() {
    let nums = 0;

    let string = await this.getString();
    if (!string) { // 입력값이 ""이면 0을 출력
      nums = 0
    }
    else {
      const CUSTOMS = await this.customSeparator(string); // customs가 0이면 커스텀 구분자가 아니므로 기본 덧셈 진행
      if (CUSTOMS == 0) {
        nums = await this.basicSumNums(string);
      }
      else {
        nums = await this.customSumNums(string);
      }
    }
    
    Console.print("결과 : "+ nums);
  }

  // 사용자 입력 받기
  async getString() {
    try {
      let userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      this.checkUserInput(userInput);
      return userInput;
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  checkUserInput(userInput) {
    if (!checkNum(userInput)) {
      throw new Error("[ERROR] 숫자를 입력하세요");
    }
    if (!customCheckIsMinus(userInput)) {
      throw new Error("[ERROR]");
    }
    if (!basicCheckIsMinus(userInput)) {
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
    const SUM_NUMS = nums.reduce((a, b) => a + b);
    return SUM_NUMS;
  }

  // 커스텀 구분자 추출과 '//'과 '\n'이 없으면 0을 반환
  customSeparator(arrayString) {
    if (arrayString.indexOf('//') == 0 && arrayString.indexOf('\\n') != -1) {
      const SEPARATOR = arrayString.substring(arrayString.indexOf('//') + 2, arrayString.indexOf('\\n'));
      return SEPARATOR;
    }
    else {
      return 0;
    }
  }
  
  // 커스텀 구분자가 있을 때 덧셈
  customSumNums(arrayString) {
    const CUSTOM_SEPARATOR = this.customSeparator(arrayString);
    let customNums = arrayString.substring(arrayString.indexOf('\\n')+2);
    customNums = customNums.split(CUSTOM_SEPARATOR).map(function(num){return parseInt(num);});
    const CUSTOM_SUM_NUMS = customNums.reduce((a, b) => a + b);
    return CUSTOM_SUM_NUMS;
  }
}

export default App;
