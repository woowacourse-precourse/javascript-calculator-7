import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    // 1. 문자열 입력받기
    Console.print("덧셈할 문자열을 입력해주세요.");
    const strInput = await Console.readLineAsync(" ");
    
    // 1-2. 입력된 문자열이 null 또는 빈문자열이라면, 0을 반환한다.
    if (strInput === "" || strInput === null) {
      console.log(0);
      return;
    }

    // 기본 구분자
    let delimeter = [",", ":"];
    let numbers = strInput;

    // 2. 커스텀 구분자 파악하기
    if(strInput.startsWith("//")) {
      // 입력 문자열이 //로 시작하면 \n 이전까지의 문자를 커스텀 구분자로 설정
      const customDelimeterEnd = strInput.indexOf("\n"); 
      delimeter = [strInput.substring(2, customDelimeterEnd)]; // 커스텀 구분자를 배열로 저장 
      numbers = strInput.substring(customDelimeterEnd + 1); // \n 이후 숫자만 남기기
    }

    // 3. 커스텀 구분자 / 기본 구분자 문자열 분리하기
    const delimiterRegex = new RegExp(`[${delimeter.join('')}]`);
    const numbersArray = numbers.split(delimiterRegex);
  }
}

export default App;
