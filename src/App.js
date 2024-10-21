import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.readInput();
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
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
    let delimiterPattern = /[,|:]/; // 기본 구분자 쉼표(,) 또는 콜론(:)

    // 3번 기능: 커스텀 구분자가 있는지 확인
    const customSeparatorFormat = input.match(/^\/\/(.)\\n(.*)/);

    if (customSeparatorFormat) {
      const customDelimiter = customSeparatorFormat[1];

      // 7번 기능: 커스텀 구분자로 숫자나 .을 사용할 수 없음
      if (customDelimiter === "." || !isNaN(customDelimiter)) {
        throw new Error(
          `[ERROR] ${customDelimiter}은(는) 구분자로 사용할 수 없습니다.`
        );
      }

      // 커스텀 구분자가 기본 구분자와 겹치면 에러 발생
      if (customDelimiter === "," || customDelimiter === ":") {
        throw new Error(
          "[ERROR] 커스텀 구분자는 기본 구분자와 겹칠 수 없습니다."
        );
      }

      // 커스텀 구분자를 반영하여 숫자를 분리
      numbers = customSeparatorFormat[2].split(customDelimiter).map(Number);
    } else {
      // 기본 구분자 쉼표(,) 또는 콜론(:)으로 숫자 분리
      numbers = input.split(delimiterPattern).map(Number);
    }

    // 5번 기능: 숫자가 아닌 값이 있는지 확인
    const invalidNumbers = numbers.filter((num) => isNaN(num));
    if (invalidNumbers.length > 0) {
      throw new Error("[ERROR] 숫자 형식이 잘못되었습니다.");
    }

    // 4번 기능: 음수가 포함된 경우 에러 발생
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        "[ERROR] 음수는 입력할 수 없습니다. 잘못된 입력: " +
          negativeNumbers.join(", ")
      );
    }

    // 6번 기능: 잘못된 구분자 형식 확인
    const delimiterErrors = input.match(/[,|:]{2,}|[,|:]$/);
    if (delimiterErrors) {
      throw new Error("[ERROR] 구분자가 잘못되었습니다.");
    }

    // 숫자 합산 후 결과 반환
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
