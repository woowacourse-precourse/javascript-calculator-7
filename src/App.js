import { Console } from "@woowacourse/mission-utils";
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
      let strings = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      return strings;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  // 쉼표와 콜론 덧셈
  async basicSumNums(arrayString) {
    let nums = await arrayString.split(/,|:/).map(function(num){return parseInt(num);});
    const SUM_NUMS = await nums.reduce((a, b) => a + b);
    return SUM_NUMS;
  }

  // 커스텀 구분자 추출과 '//'과 '\n'이 없으면 0을 반환
  async customSeparator(arrayString) {
    if (arrayString.indexOf('//') == 0 && arrayString.indexOf('\\n') != -1) {
      const SEPARATOR = await arrayString.substring(arrayString.indexOf('//') + 2, arrayString.indexOf('\\n'));
      return SEPARATOR;
    }
    else {return 0;}
  }
  
  // 커스텀 구분자가 있을 때 덧셈
  async customSumNums(arrayString) {
    const CUSTOM_SEPARATOR = await this.customSeparator(arrayString);
    let customNums = arrayString.substring(arrayString.indexOf('\\n')+2);
    customNums = await customNums.split(CUSTOM_SEPARATOR).map(function(num){return parseInt(num);});
    const CUSTOM_SUM_NUMS = await customNums.reduce((a, b) => a + b);
    return CUSTOM_SUM_NUMS;
  }
}

export default App;
