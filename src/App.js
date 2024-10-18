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
    // 6번 기능: 연속된 구분자나 문자열 끝에 구분자가 있는지 확인
    const delimiterPattern = customSeparatorFormat
      ? customSeparatorFormat[1]
      : /[,|:]/; // 커스텀 구분자 사용 또는 기본 구분자 사용

    // 유효성 검사: 연속된 구분자 또는 끝에 구분자가 있는지 확인
    const invalidSeparatorPattern = new RegExp(
      `(${delimiterPattern}){2,}|(${delimiterPattern})$`
    );
    if (invalidSeparatorPattern.test(input)) {
      throw new Error("[ERROR] 구분자가 연속되거나 마지막에 올 수 없습니다.");
    }
    // 5번 기능: 숫자가 아닌 값이 있는지 확인
    const invalidNumbers = numbers.filter((num) => isNaN(num));
    if (invalidNumbers.length > 0) {
      throw new Error("[ERROR] 숫자 형식이 잘못되었습니다.");
    }

    // 4번 기능: 음수가 포함된 경우 에러를 발생시킴
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }

    // 합산 결과 반환
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
