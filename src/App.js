import { Console } from "@woowacourse/mission-utils";

class App {
  getInputString() {
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
  }

  // 에러 발생 함수
  throwError() {
    Console.print("[ERROR]");
    throw new Error("[ERROR]");
  }

  stringSplitDelimiter(inputString) {
    // 커스텀 구분자 사용 시
    if (inputString.startsWith("//")) {
      const index = inputString.indexOf("\\n");

      // 커스텀 구분자 끝 지정을 잘못한 경우
      if (index === -1) {
        this.throwError();
      }

      const delimiter = inputString.substring(2, index);
      const stringToSplit = inputString.substring(index + 2);

      // 커스텀 구분자인 경우에도 기본 구분자로도 구분 가능하게 정규식 생성

      const regex = new RegExp(`[${delimiter}:,]`);

      return stringToSplit.split(regex).map(Number);
    } else {
      // 기본 구분자(쉼표, 콜론) 사용 시
      return inputString.split(/,|:/).map(Number);
    }
  }

  addNumbers(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    Console.print("결과 : " + sum);
  }

  catchException(splitString) {
    // 음수가 포함된 경우
    if (splitString.some((num) => num < 0)) {
      this.throwError();
    }
    // 숫자 아닌 문자 입력 한 경우, 올바르지 않은 구분자 사용한 경우

    if (splitString.some((val) => isNaN(val))) {
      this.throwError();
    }
  }

  async run() {
    // 문자열 입력
    const inputString = await this.getInputString();

    // 구분자 기준으로 문자열 분리
    const splitString = this.stringSplitDelimiter(inputString);

    // 예외 처리 함수
    this.catchException(splitString);

    // 문자열에서 분리된 숫자들의 합 계산
    this.addNumbers(splitString);
  }
}

export default App;
