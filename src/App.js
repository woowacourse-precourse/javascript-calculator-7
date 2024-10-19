import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");
  
    try{
      //문자열 분리
      //쉼표 또는 콜론
      if((/,|:/).test(input)){
        const result = input.split((/,|:/)).map(Number).reduce((a,b)=>a+b,0); //합산
        Console.print("결과: " + result);
      } 

      //커스텀 구분자
      else if((/\/\/(.*?)\\n/).test(input)){
        //커스텀 구분자 추출
        const matchStr = input.match(/\/\/(.*?)\\n/);
        const customChar = matchStr[1];

        //분리할 문자열
        const str = input.replace(/\/\/.*?\\n/,'');
        const result = str.split(customChar).map(Number).reduce((a,b)=>a+b,0); //합산
        Console.print("결과: " + result);
      } 
      
      else {
        throw new Error();
      }
    } catch (err) {
      Console.print(err);
      Console.print("[ERROR] 잘못된 값을 입력하셨습니다. 앱을 다시 실행해주세요.");
    }
  }
  
}

export default App;
