import {Console} from "@woowacourse/mission-utils";
class App {
  constructor(){
    this.CUSTOM_SEPARATE = /^\/\/(.*)\\n/;
    this.UNCOUTOM_SEPARATE = /[,:]/;
    this.LANGUAGE_ERROR_MESSAGE = "유효한 문자열이 아닙니다.";
    this.SEPARATOR_ERROR_MESSAGE = "유효한 구분자가 아닙니다.";
  }

  //실행 함수
  async run() {
    //사용자 입력 받음
    const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    this.checkUserInput(userInput);
  }

  //문자열 구분자 조건 확인 함수
  checkUserInput(userInput){
    if(userInput.length == 0){
      this.printResult(0);
    }
    else if(this.isValidString(userInput, this.CUSTOM_SEPARATE)){
      this.customSeparate(userInput);
    }else if(this.isValidString(userInput, this.UNCOUTOM_SEPARATE)){
      this.unCustomSeparate(userInput);
    }  
  }

  //커스텀 구분자 처리 함수
  customSeparate(userInput){
    const separator = userInput.match(this.CUSTOM_SEPARATE);
    console.log(separator);
      if(separator[1]){
        //구분자에 대한 유효성 검사
        if(this.isValidString(userInput.split('\\n')[1],new RegExp(`^[1-9${separator}]`))){
          const numbersArray = userInput.split('\\n')[1].split(separator[1]);
        }
      }
  }

  //비커스텀 구분자 처리 함수
  unCustomSeparate(userInput){
    const numbersArray = userInput.split(this.UNCOUTOM_SEPARATE);
  }

  //문자열 구분자 유효성 검사
  isValidString(str,regex){
    if(regex.test(str))
      return true;
    return false;
  }

}

export default App;