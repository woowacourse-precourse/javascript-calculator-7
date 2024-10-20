import { Console } from "@woowacourse/mission-utils";

class Calculator {
  constructor() {
    // 생성자에서는 특별히 할 작업이 없지만, 확장성을 위해 추가
  }

  add(input) {
    if (input === "") {
      return 0;
    }

    let delimiter = /[,:]/;
    let numbersString = input;

    if (input.startsWith("//")) {
      const parts = input.split("\n");
      if (parts.length < 2) {
        throw new Error("[ERROR]");
      }
      const customDelimiter = parts[0].substring(2);
      delimiter = new RegExp(`[${customDelimiter}]`); // 커스텀 구분자 처리
      numbersString = parts[1];
    }

    const numbers = numbersString.split(delimiter);
    const sum = numbers.reduce((total, current) => {
      const num = parseInt(current, 10);
      if (isNaN(num) || num < 0) {
        // 음수와 NaN 처리
        throw new Error("[ERROR]");
      }
      return total + num;
    }, 0);

    return sum;
  }

  async askForInput() {
    while (true) {
      try {
        const userInput = await Console.readLineAsync(
          "덧셈할 문자열을 입력해 주세요."
        );

        if (userInput.toLowerCase() === "종료") {
          Console.print("프로그램을 종료합니다.");
          return;
        }

        Console.print(`결과 : ${this.add(userInput)}`); // this를 통해 클래스 메서드 호출
      } catch (error) {
        Console.print("[ERROR]");
        return;
      }
    }
  }
}

async function run() {
  const calculator = new Calculator(); // Calculator 클래스의 인스턴스 생성
  await calculator.askForInput(); // 입력 요청
}

export { run };
