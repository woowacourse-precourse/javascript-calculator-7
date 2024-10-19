import { MissionUtils } from "@woowacourse/mission-utils";
class StringCalculator{ // 계산을 위한 클래스
  add(inputs){
    try{
      let DELIMITER = /[,:]/;// 기본 구분자를 쉼표(,) 또는 콜론(:)으로 설정
                            // let을 사용한 이유는 나중에 커스텀 구분자로 변경하여 사용하기 위함
      // 입력 문자열을 구분자로 분리한 후, 
      // 숫자로 변환(입력값을 split으로 구분자로 나누고 map을 돌아 숫자마다 십진수값으로 변환)
      const NUMBERS = inputs.split(DELIMITER).map((num)=>{
        const parsedNum = parseInt(num,10);//십진수
        return parsedNum;
      })
      return NUMBERS.reduce((sum, num)=> sum + num, 0); //배열 numbers의 모든 요소를 더해 합산
      //reduce(누적값, 현재 요소) => {처리 로직} , 초기값)
    }catch(error){
      throw new Error("잘못된 입력 형식입니다.");
    }
  }
}
class App { // 입력과 출력하는 클래스
  constructor(){ // StringCalculator 인스턴스를 생성하여 저장
    this.calculator = new StringCalculator();
  }
  async run() {
      try{
        // 사용자로부터 문자열 입력을 비동기적으로 받음
        const INPUT = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력하여 주세요.\n");
        // 입력된 문자열을 계산하여 결과를 얻음
        const RESULT = this.calculator.add(INPUT);
        MissionUtils.Console.print(`결과: ${RESULT}\n`);
      }catch(error){
        console.error(`ERROR - ${error.message}`);//에러에 맞게 메시지 출력
        
      }
  }
}
export default App;