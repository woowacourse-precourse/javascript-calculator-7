import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const separateInput = function separateInputWithSeperator(userInput) {
      //커스텀 구분자 인식
      let numbers = userInput;
      let customSeparator;
      let finalNumbers;

      const CUSTOM_START = userInput.indexOf("//");
      const CUSTOM_END = userInput.indexOf("\\n");
     
      if(CUSTOM_START !== -1 && CUSTOM_END !== -1 && CUSTOM_START === 0) {
        customSeparator = userInput.substring(CUSTOM_START+2, CUSTOM_END);
        userInput = userInput.slice(CUSTOM_END+2);
        //커스텀 구분자로 절단 후 기본 구분자로 절단
        numbers = userInput.split(customSeparator);
        finalNumbers = numbers.map(num => num.split(/[,;]/));
      } else {
        //기본 구분자로 절단
        finalNumbers = numbers.split(/[,;]/);
      }
      
      //2차원 배열을 1차원 배열로 변환
      finalNumbers = finalNumbers.flatMap(numarray => numarray);
      return finalNumbers;
    }
    
    const isAllNum = function isAllNumericStrings(array) {
      return array.every(element => 
        typeof element === "string" && /^\d+$/.test(element)
      );
    }
  
    try {
      //유저에게 입력받기
      let userInput = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
      if (userInput.includes(" ")) {
        throw new Error("spaceInInput");
      } else {
        userInput = separateInput(userInput);
      }

      //숫자만으로 이루어진 배열인지 체크하고 더하기
      if (isAllNum(userInput)) {
        const inputSum = userInput.reduce((sum, num) => sum + Number(num), 0);
        Console.print(`결과 : ${inputSum}`);
      } else {
        throw new Error("notAllNum");
     }  
    } catch(error) {
      if (error.message === "spaceInInput") {
        throw new Error("[ERROR] 공백 없이 입력해 주세요!");
      } else if (error.message === "notAllNum") {
        throw new Error("[ERROR] 구분자와 숫자만 입력해주세요!");
      } else {
        throw new Error(`[ERROR] 알 수 없는 에러 발생: ${error.message}`);
      }  
    }
  }   
}

export default App;