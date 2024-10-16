import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    let numbers;

    //커스텀 구분자 처리
    if (input.startsWith("//") && input.substring(3, 5) === "\\n") {
      numbers = input.substring(5).split(input[2]).map(Number);
    } else {
      // 기본 구분자 처리
      numbers = input.split(/,|;/).map(Number);
    }

    // 합 계산
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
  }
}

export default App;
