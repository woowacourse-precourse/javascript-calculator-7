import { Console } from "@woowacourse/mission-utils";

class App {
  async run(input = "") {
    try {
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async readInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요:\n");
  }

  calculate(input) {
    // 1번 기능: 빈 문자열일 경우 0을 반환
    if (input === "") {
      return 0;
    }

    let numbers = [];

    // 3번 기능: 커스텀 구분자가 있는지 확인
    const customSeparatorFormat = input.match(/^\/\/(.)\n(.*)/); // 커스텀 구분자가 있는지 match 메서드로 확인

    if (customSeparatorFormat) {
      const customDelimiter = customSeparatorFormat[1]; // 커스텀 구분자를 추출
      if (customDelimiter === "," || customDelimiter === ":") {
        throw new Error(
          "[ERROR] 커스텀 구분자는 기본 구분자와 겹칠 수 없습니다."
        );
      }
      numbers = customSeparatorFormat[2].split(customDelimiter).map(Number); // 커스텀 구분자로 숫자를 분리
    } else {
      // 2번 기능: 쉼표(,) 또는 콜론(:) 구분자로 숫자 더하기
      numbers = input.split(/[,|:]/).map(Number);
    }

    // 합산 결과 반환
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
