import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // [feat] 1. 사용자 입력
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      
      // [feat] 2. 문자열에서 숫자를 추출하여 합산
      const result = this.calculate(input);
    } catch (error) {
      Console.print(error.message);
    }
  }

  // [feat] 2.1 문자열에서 숫자를 추출하여 합산
  calculate(input){
    // 빈 문자열 입력시 0 반환
    if(!input){
      return 0;
    }

    const numberList = this.splitNumbers(input);
    
    // [feat] 2.1.1 숫자를 모두 더한 결과 반환
    const sum = numberList.reduce((total, num) => {
      const parseNumber = parseInt(num,10);
      if(isNaN(parseNumber) || parseNumber<0){
        throw new Error("[Error] 잘못된 입력입니다. 숫자는 0 이상의 값이어야 합니다.")
      }
      return total + parseNumber;
    }, 0);

    return sum;
  }

}

export default App;
