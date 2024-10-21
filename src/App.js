import { Console } from "@woowacourse/mission-utils";

class App {
  inputRequestText() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
  }
  isAllNumber(arr) {
    return arr.every((v) => !isNaN(v)) && arr.every((v) => v > 0);
  }
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
        // 잘 못 입 력.
        return [false];
      }
      // 일반 방식 또는 틀린 방식
    }

    // 일반 방식 이나 틀린 방식.
    input = input.replaceAll(",", ":");
    Console.print(input);
    const arr = input.split(":").map((e) => +e);
    Console.print(arr);
    if (this.isAllNumber(arr)) {
      return [true, arr];
    }

    return [false];
  }
  calculate(arr) {}
  async getInput() {
    const inputValue = await Console.readLineAsync("");
    const result = this.verifyInput(inputValue);
    if (result[0]) {
      Console.print(result[1]);
      // this.calculate(result[1]);
    } else {
      throw Error(
        "[ERROR] 양수와 구분자(, 또는 : 또는 커스텀 //x\\n)로 이루어진 문자열을 입력해주세요"
      );
    }
  }
  async run() {
    this.inputRequestText();
    this.getInput();
  }
}

export default App;
