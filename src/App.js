import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    // 계산기 함수
    const sumCalculator = (inputString) => {

      if (inputString == "" ) { // 빈 문자열이 들어오면 0을 리턴
        return 0;
      }

      const numbers = inputString.split(/:|,/);
      
      let sum = 0;
      numbers.forEach((numStr) => {
        const number = Number(numStr);
        
        if (isNaN(number)) {
          throw new Error('[Error] 숫자가 아닌 값이 포함되어 있습니다.');
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
      Console.print("bye");
    }

  }


}


export default App;
