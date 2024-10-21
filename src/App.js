import { Console } from "@woowacourse/mission-utils";

class App {
  //문자열 덧셈 계산기 함수
  calculator(numbers) {
    // 예외 사항 1: 빈 문자열 처리
    if (numbers === "") return 0;
  }
  async run() {
    try {
      // 사용자 입력
      const input = await Console.readLineAsync(
        "구분자와 양수로 구성된 문자열을 입력해주세요: "
      );
      // 계산 결과
      const result = this.calculator(input);
    } catch (e) {}
  }
}

export default App;
