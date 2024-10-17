import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해주세요.");
    const inputStr = await Console.readLineAsync("");
    let numbersArr = [];
    const defaultSeparators = ",:"; // 기본 구분자 (쉼표와 콜론)
    let sum = 0; // 최종 덧셈 결과

    // 쉼표와 클론으로 계산
    if (inputStr.match(defaultSeparators)) {
      numbersArr = inputStr.split(defaultSeparators).map(Number); // 문자열을 숫자 배열로 변환
    }
  }
}

export default App;
