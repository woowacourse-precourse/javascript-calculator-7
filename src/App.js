import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    // 입력값이 비어 있는 경우 0 출력
    if (input === "") {
      Console.print(0);
      return;
    }

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

    // 예외처리 및 출력
    if (numbers.some((num) => isNaN(num) || num <= 0)) {
      throw new Error("[ERROR]");
    } else {
      Console.print(`결과 : ${sum}`);
    }
  }
}

export default App;
