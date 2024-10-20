import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    // 1. 문자열 입력받기
    const strInput = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");
    
    // 1-2. 입력된 문자열이 null 또는 빈문자열이라면, 0을 반환한다.
    if (strInput === "" || strInput === null) {
      Console.print(0);
      return;
    }

    // 기본 구분자
    let delimiter = [",", ":"];
    let numbers = strInput;

    // 2. 커스텀 구분자 파악하기
    if(strInput.startsWith("//")) {
      // 입력 문자열이 //로 시작하면 \n 이전까지의 문자를 커스텀 구분자로 설정
      const customDelimiterEnd = strInput.indexOf("\n"); 
      delimiter = [strInput.substring(2, customDelimiterEnd)]; // 커스텀 구분자를 배열로 저장 
      numbers = strInput.substring(customDelimiterEnd + 1); // \n 이후 숫자만 남기기
    }

    // 3. 커스텀 구분자 / 기본 구분자 문자열 분리하기
    const delimiterRegex = new RegExp(`[${delimiter.join('')}]`);
    const numbersArray = numbers.split(delimiterRegex);

    // 4. 숫자 추출 및 합 계산하기
    let sum = 0;

    for(let i = 0; i < numbersArray.length; i++) {
      const num = Number(numbersArray[i]);

      if(isNaN(num)) {
        throw new Error("[ERROR] 입력한 값이 올바른지 확인해주세요.");
      }

      if(num < 0) {
        throw new Error("[ERROR] 음수가 아닌 양수를 입력해주세요.")
      }
      
      sum += num;
    }

    // 결과 출력
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
