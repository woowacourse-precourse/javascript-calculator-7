import { Console } from "@woowacourse/mission-utils";

class App {
  inputRequestText() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
  }
  isAllNumber(arr) {
    return arr.every((v) => !isNaN(arr));
  }
  verifyInput(input) {
    // 커스텀 방식일 때 최소 길이.
    if (input.length >= 5) {
      const front = input.slice(0, 2);
      const rear = input.slice(3, 5);
      const isCustom = front === "//" && rear === "\n";
      if (isCustom && isNaN(input[2])) {
        // 커스텀
        const div = input[2];
        const arr = input
          .slice(5)
          .split(div)
          .map((e) => +e);
        if (this.isAllNumber(arr)) {
          Console.print("올바름", arr);
          return true;
        } else {
          // 잘못된 입력.
          return false;
        }
      } else {
        // 일반 방식.
        input = input.replaceAll(",", ":");
        const arr = input.split(":").map((e) => +e);
        if (this.isAllNumber(arr)) {
          Console.print("올바름", arr);
          return true;
        }
        // 잘 못 입 력.
        return false;
      }
      // 일반 방식 또는 틀린 방식
    }
    // 일반 방식 이나 틀린 방식.
    input = input.replaceAll(",", ":");
    const arr = input.split(":").map((e) => +e);
    if (this.isAllNumber(arr)) {
      Console.print("올바름");
      return true;
    }
    return false;
  }
  async getInput() {
    const inputValue = await Console.readLineAsync("");
    if (this.verifyInput(inputValue)) {
      Console.print("올바른 입력!!");
    }
  }
  async run() {
    this.inputRequestText();
    this.getInput();
  }
}

export default App;
