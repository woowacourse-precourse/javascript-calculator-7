import { Console } from "@woowacourse/mission-utils";

class App {
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
      this.Exception(Custom_delim_end === -1, "[ERROR]");

      // 커스텀 구분자 추출
      let Custsom_delim = Input.substring(2, Custom_delim_end);
      Delim = new RegExp(`[${Custsom_delim}]`); // 정규식 객체 생성

      // 숫자 부분 추출
      Input = Input.substring(Custom_delim_end + 1);
    }

    // 문자열을 구분자로 분리하고 숫자로 변환, trim()으로 공백 제거
    Num = Input.split(Delim).map((x) => x.trim()).map(Number);
  }
}

export default App;
