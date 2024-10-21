import { Console } from "@woowacourse/mission-utils";

class App {
  // 입력 요청 문구 출력
  inputRequestText() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
  }
  // 구분자 이외의 모든 문자가 숫자이고 양수인지 검사
  isAllNumber(arr) {
    return arr.every((v) => !isNaN(v)) && arr.every((v) => v > 0);
  }
  // 커스텀 방식 또는 ,와 :로 이뤄진 방식인지 확인 & 올바른 문자열 입력인지 확인하는 함수
  // [true, Array] or [false]을 반환.
  verifyInput(input) {
    // 커스텀 방식일 때 최소 길이.
    if (input.length >= 5) {
      const front = input.slice(0, 2);
      const rear = input.slice(3, 5);

      const isCustom = front === "//" && rear === "\\n";

      if (isCustom && isNaN(input[2])) {
        // 커스텀
        const div = input[2];
        const arr = input
          .slice(5)
          .split(div)
          .map((e) => +e);
        if (this.isAllNumber(arr)) {
          return [true, arr];
        } else {
          // 잘못된 입력.
          return [false];
        }
      } else {
        // 일반 방식.
        input = input.replaceAll(",", ":");
        const arr = input.split(":").map((e) => +e);
        if (this.isAllNumber(arr)) {
          return [true, arr];
        }

        return [false];
      }
    }

    // 일반 방식 이나 틀린 방식.
    input = input.replaceAll(",", ":");

    const arr = input.split(":").map((e) => +e);

    if (this.isAllNumber(arr)) {
      return [true, arr];
    }

    return [false];
  }
  // 덧셈 결과 반환
  calculate(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
  // 입력 값 받기.
  async getInput() {
    const inputValue = await Console.readLineAsync("");
    return inputValue;
  }
  // 결과 값 출력하기.
  printResult(answer) {
    Console.print(`결과 : ${answer}`);
  }
  async run() {
    this.inputRequestText();
    const inputValue = await this.getInput(); // input은 비동기 이므로 await 붙이기.
    const result = this.verifyInput(inputValue);
    if (result[0]) {
      const answer = this.calculate(result[1]);
      this.printResult(answer);
    } else {
      throw Error(
        "[ERROR] 양수와 구분자(, 또는 : 또는 커스텀 //x\\n)로 이루어진 문자열을 입력해주세요"
      );
    }
  }
}

export default App;
