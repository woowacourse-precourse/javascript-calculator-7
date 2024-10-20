import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    // 계산기 함수
    const sumCalculator = (inputString) => {

      if (inputString == "" ) { // 빈 문자열이 들어오면 0을 리턴
        return 0;
      }

      // 문자열 구분을 위한 구분자 선언
      let delimiter = /:|,/ ;

      if (inputString.startsWith('//')) {

        const customDelimiterEndIndex = inputString.indexOf('\\n');
        const customDelimiterStringIndex = inputString.indexOf('\\n') + 2 ;
        

        if (customDelimiterEndIndex === -1) {
          throw new Error('[ERROR] 커스텀 구분자가 정상적으로 입력되지 않았습니다.') ;
        }

        delimiter = inputString.substring(2, customDelimiterEndIndex);
        inputString = inputString.substring(customDelimiterStringIndex)

      }

      const numbers = inputString.split(delimiter);
      
      let sum = 0;
      numbers.forEach((numStr) => {
        const number = Number(numStr);
        
        if (isNaN(number) || number < 0) {
          throw new Error("[ERROR] 숫자가 아니거나 음수인 값이 포함되어 있습니다.");
        }

        sum += number;
        
      })
      
      return sum

    }

    try {
      const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = sumCalculator(inputString);

      Console.print(`결과 : ${result}`);

    } catch (error) {
      Console.print("[ERROR] 프로그램이 종료됩니다.");
      throw error;
    }

  }


}


export default App;
