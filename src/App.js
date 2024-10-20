import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
      let custom="";
      let sum=0;

      //1. input 받기 
      let input= await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

      //Error 1. 입력받는 값이 숫자 , // 인지 확인 아닐지 error 메시지
      if(!(input[0] >='0' && input[0]<='9') && !input.startsWith("//")){
        throw new Error('[ERROR] 잘못된 입력입니다.'); 
      }

      //2. //로 시작하면 커스텀 구분자 로 판단
      if(input.slice(0,2) === "//"){
        custom=input.slice(2,3);
        input=input.slice(5);
      }
      
      //3. 커스텀 구분자, 쉼표(,), 콜론(:) 에 따라 split으로 나눠서 배열에 저장
      const delimiter = new RegExp(`[${custom},:]+`);
      const result = input.split(delimiter);

      //4. 배열 저장 한거 더하기 
      for (let i = 0; i < result.length; i++) {
        // 5. input이 "" 거나 0 이면 0 출력
        if (result[i] === "" || isNaN(result[i])) {
          sum == 0;  // 빈 문자열 또는 NaN은 0으로 처리
        } else {
          sum += Number(result[i]);
        }
      }

      //6. 결과 출력
      Console.print("결과 : " + sum);
  }
}

export default App;
