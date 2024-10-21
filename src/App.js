import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력 요청
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    // 빈 문자열 처리
    if (input.trim() === "") {
      Console.print("결과 : 0");
      return;
    }

    // 입력 유효성 검사 및 숫자 배열 반환
    const result = this.verifyInput(input);
    if (result[0]) {
      const answer = this.calculate(result[1]);
      Console.print(`결과 : ${answer}`);
    } else {
      throw new Error(
        "[ERROR] 양수와 구분자(, 또는 : 또는 커스텀 //x\\n)로 이루어진 문자열을 입력해주세요."
      );
    }
  }

  // 구분자 이외의 모든 문자가 숫자이고 양수인지 검사
  isAllNumber(arr) {
    return arr.every((v) => !isNaN(v)) && arr.every((v) => v > 0);
  }

  // 커스텀 방식 또는 일반 방식인지 확인하고 유효한 배열 반환
  verifyInput(input) {
    // 커스텀 구분자 처리
    const customMatch = input.match(/^\/\/(.*?)\\n(.+)$/);
    if (customMatch) {
      const customSeparator = customMatch[1].trim();
      const numbersString = customMatch[2];
      
      // 숫자 배열로 변환
      const arr = numbersString.split(customSeparator).map((num) => +num.trim());
      if (this.isAllNumber(arr)) {
        return [true, arr];
      }
    } 

    // 일반 구분자 처리
    const arr = input.split(/[:,]+/).map((num) => +num.trim());
    if (this.isAllNumber(arr)) {
      return [true, arr];
    }

    return [false];
  }

  // 덧셈 결과 반환
  calculate(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
