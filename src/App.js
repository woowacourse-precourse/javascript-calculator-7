import Calculator from "./calculator.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // Calculator 인스턴스 생성
    const calculator = new Calculator();

    // 사용자에게 문자열 입력 받고 처리하는 함수
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.", (input) => {
      try {
        // 입력받은 문자열을 Calculator의 add메서드로 계산 후 결과 반환
        const result = calculator.add(input);
        Console.print(`결과 : ${result}`);
      } catch (error) {
        // 예외 발생 시 에러 메시지 출력
        Console.print(`[ERROR] ${error.message}`);
      }
    });
  }
}

export default App;
