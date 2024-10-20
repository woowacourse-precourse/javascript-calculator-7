import { Console } from "@woowacourse/mission-utils";

class App {

  // 예외 처리를 위한 함수
  Exception(condition, message) {
    if (condition) throw new Error(message);
  }

  async run() {
    // 문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요."); 
    let Input = await Console.readLineAsync("");

    // 기본 구분자를 정규식으로 포함
    let Delim = /[,:]/;
    let Num;

    // 커스텀 구분자 인식
    if (Input.startsWith("//")) {
      // \n을 실제 줄바꿈으로 변환
      Input = Input.replace("\\n", "\n");

      let Custom_delim_end = Input.indexOf("\n");

      // 커스텀 구분자 추출
      let Custsom_delim = Input.substring(2, Custom_delim_end);
      Delim = new RegExp(`[${Custsom_delim}]`); // 정규식 객체 생성

      // 숫자 부분 추출
      Input = Input.substring(Custom_delim_end + 1);
    }

    // 문자열을 구분자로 분리하고 숫자로 변환, trim()으로 공백 제거
    Num = Input.split(Delim).map((x) => x.trim()).map(Number);

    // 합산 계산
    let SUM = 0;
    for (let i = 0; i < Num.length; i++) {
      SUM += Num[i];
    }

    // 결과 출력
    Console.print(`결과 : ${SUM}`);
  }
}

export default App;