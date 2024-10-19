import { MissionUtils } from "@woowacourse/mission-utils";
class StringCalculator{ // 계산을 위한 클래스
  add(inputs){
    if(inputs === "" || inputs.trim() === ""){ // 빈 문자열이거나 공백만 포함되어 있는 경우
      throw new Error("[ERROR] 빈 문자열은 허용되지 않습니다.") // trim()은 공백 제거된 문자열 반환
    }
    try{
      let DELIMITER = /[,:]/;// 기본 구분자를 쉼표(,) 또는 콜론(:)으로 설정
                            // let을 사용한 이유는 나중에 커스텀 구분자로 변경하여 사용하기 위함
     // 입력 문자열이 커스텀 구분자를 가지고 있을 경우

      if(inputs.startsWith("//")){ // 입력이 "//"으로 시작되었을 때에만 실행
        const CUSTOM = inputs.match(/^\/\/(.)\\n/);// 커스텀 구분자를 찾기 위한 정규표현식. 
                                                   // "//" 뒤의 문자와 "\n" 사이를 구분자로 설정
        if(CUSTOM){// 커스텀 구분자를 찾았을 때만 실행
          DELIMITER = CUSTOM[1]; // 구분자를 정규표현식에서 추출한 커스텀 구분자로 변경
                                 // 예: 세미콜론(;)을 구분자로 설정
          inputs = inputs.slice(CUSTOM[0].length); // "1;2;3"과 같이 구분자 뒤의 숫자만 남김
        }else{
          throw new Error("[ERROR] 잘못된 입력 형식입니다.");
        }
      }
      // 입력 문자열을 구분자로 분리한 후, 
      // 숫자로 변환(입력값을 split으로 구분자로 나누고 map을 돌아 숫자마다 십진수값으로 변환)
      const NUMBERS = inputs.split(DELIMITER).map((num)=>{
        const PARSED = parseInt(num,10);//십진수
        if (PARSED < 0) { // 음수 체크
          throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${PARSED}`);
        }
        return PARSED;
      });

      return NUMBERS.reduce((sum, num)=> sum + num, 0); //배열 numbers의 모든 요소를 더해 합산
      //reduce(누적값, 현재 요소) => {처리 로직} , 초기값)
    }catch(error){
      throw error;
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
        const INPUT = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력하여 주세요.");
        // 입력된 문자열을 계산하여 결과를 얻음
        const RESULT = this.calculator.add(INPUT);
        MissionUtils.Console.print(`결과 : ${RESULT}`);
      }catch(error){
        console.error(error.message);
        throw error; 
      }
  }
}
export default App;