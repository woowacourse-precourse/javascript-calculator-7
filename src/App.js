import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    //함수: 구분자 인식 및 문자열 절단
    const separateInput = function separateInputWithSeperator(userInput) {
      //커스텀 구분자 인식
      let numbers = userInput;
      let custom_separator;
      let finalNumbers;

      const CUSTOM_START = userInput.indexOf("//");
      const CUSTOM_END = userInput.indexOf("\\n");
     
      if(CUSTOM_START !== -1 && CUSTOM_END !== -1 && CUSTOM_START === 0) {
        custom_separator = userInput.substring(CUSTOM_START+2, CUSTOM_END);
        userInput = userInput.slice(CUSTOM_END+2);
        //커스텀 구분자로 절단 후 기본 구분자로 절단
        numbers = userInput.split(custom_separator);
        finalNumbers = numbers.map(num => num.split(/[,;]/));
      } else {
        //기본 구분자로 절단
        finalNumbers = numbers.split(/[,;]/);
      }
      
      //2차원 배열을 1차원 배열로 변환
      finalNumbers = finalNumbers.flatMap(numarray => numarray);
      return finalNumbers;
    }
    
    /*
    const isAllNum = function isAllNumericStrings(array) {
      return array.every(element => 
        typeof element === 'string' && /^\d+$/.test(element)
      );
    }

    //error 함수
    function inputError() {
      Console.print("[ERROR]");
    }*/

    //함수 선언 끝


    //App start
    //유저에게 입력받기
    let USER_INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
    if (USER_INPUT.includes(" ")) {
      Console.print("[ERROR] 공백 없이 입력해 주세요!");
    } else {
      const USER_NUMBERS = separateInput(USER_INPUT);
    }

  }   
}

const APP = new App();
APP.run();

export default App;