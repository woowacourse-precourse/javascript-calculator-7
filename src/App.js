import { Console } from "@woowacourse/mission-utils";

class App{
  async run(){
    // 1. 문자열 입력 후 입력 데이터 저장 & 구분자와 사용할 변수 선언
    Console.print('덧셈할 문자열을 입력해 주세요.')
    const DATA=await Console.readLineAsync('');

    let SEPARATOR=/[,|:]/;
    let NUMBERS=[]
    let RESULT = 0;
  }
}