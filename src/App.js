import { Console } from "@woowacourse/mission-utils";

class App {
  // 전체 실행 흐름
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요."); // 시작

    const INPUT = await Console.readLineAsync(""); // 사용자 입력
    // 빈 문자열일 경우 결과를 0으로 출력
    if (INPUT.trim() === "") {
      Console.print("결과 : 0"); // 결과
      return; // 함수 종료
    }
  }
  // 커스텀 구분자 처리하기
  getCustomSeparator(INPUT) {
    if (INPUT.startsWith("//") && INPUT.includes("\\n")) {
      return INPUT[2]; // 커스텀 구분자를 반환
    }
    return null;
  }
}

export default App;
