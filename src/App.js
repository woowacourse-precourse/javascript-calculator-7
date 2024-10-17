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

    // 커스텀 구분자로 계산(형식: //구분자\n숫자들)
    else if (inputStr.startsWith("//") && inputStr.substring(3, 5) === "\\n") {
      const customSeparator = inputStr[2]; // 커스텀 구분자 추출
      numbersArr = inputStr.substring(5).split(customSeparator).map(Number); // 커스텀 구분자로 문자열 분리
    }
  }
}

export default App;
