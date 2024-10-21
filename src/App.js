import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // [feat] 1. 사용자 입력
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      
      // [feat] 2. 문자열에서 숫자를 추출하여 합산
      const result = this.calculate(input);

      // [feat] 3. 결과값 출력
      Console.print(`결과 : ${result}`);
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

  // [feat] 2.2 문자열에서 구분자를 추출하고 숫자들을 배열로 반환
  splitNumbers(input){
    // 기본 구분자 , 와 :
    let delimiters = /[,:]/;
    let numberString = input;

    // [feat] 2.2.1 커스텀 구분자가 있을 경우 delimiters 수정
    if(input.startsWith("//")){
      const delimiterStartIndex = input.indexOf("//") + 2;
      const delimiterEndIndex = input.indexOf("\\n");

      if(delimiterEndIndex === -1){
        throw new Error("[ERROR] 잘못된 구분자 형식입니!!!!다.");
      }

      // "//"와 "\n" 사이에 있는 문자를 구분자로 설정
      const customDelimiter = input.substring(delimiterStartIndex, delimiterEndIndex);
      
      // 커스텀 구분자를 추가
      delimiters = new RegExp(`[,:${customDelimiter}]`);

      // 커스텀 구분자 설정 제외한 숫자 부분
      numberString = input.substring(delimiterEndIndex+2);
    } else {
      // 커스텀 구분자가 없는 경우, 쉼표(,)와 콜론(:) 이외의 구분자 사용 여부 확인
      const invalidDelimiter = /[^0-9,:]/;
      if(invalidDelimiter.test(input)){
        throw new Error("[ERROR] 잘못된 구분자 형식입니다.");
      }
    }

    // [feat] 2.2.2 구분자에 따라 숫자들을 나누고 리스트로 반환
    const numberList = numberString.split(delimiters);

    return numberList;
  }
}

export default App;
