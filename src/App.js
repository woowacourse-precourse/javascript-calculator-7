import { Console } from "@woowacourse/mission-utils";

class App {
  getInputString() {
    const inputString =
      Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
    return inputString;
  }

  stringSplitDelimiter(inputString) {
    let str = [];
    // 커스텀 구분자 사용 시
    if (inputString[0] === "/" && inputString[1] === "/") {
      const index = inputString.indexOf("\\n");
      const delimiter = inputString.substring(2, index);
      const stringToSplit = inputString.substring(index + 2);

      // 커스텀 구분자인 경우에도 기본 구분자로도 구분 가능하게 정규식 생성

      const regex = new RegExp(`[${delimiter}:,]`);

      str = stringToSplit.split(regex).map(Number);
    } else {
      // 기본 구분자(쉼표, 콜론) 사용 시
      str = inputString.split(/,|:/).map(Number);
    }

    return str;
  }

  addNumbers(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    Console.print("결과 : " + sum);
  }

  printError() {
    Console.print("[ERROR]");
  }

  catchException(splitedString) {
    // 음수가 포함된 경우
    if (splitedString.some((num) => num < 0)) {
      this.printError();
      throw new Error("[ERROR]");
    }
    // 숫자 아닌 문자 입력 한 경우, 올바르지 않은 구분자 사용한 경우
    // 커스텀 구분자 시작과 끝을 잘못 지정한 경우

    if (splitedString.some((val) => isNaN(val))) {
      this.printError();
      throw new Error("[ERROR]");
    }
  }

  async run() {
    // 문자열 입력
    const inputString = await this.getInputString();

    // 구분자 기준으로 문자열 분리
    const splitedString = this.stringSplitDelimiter(inputString);

    // 예외 처리 함수
    this.catchException(splitedString);

    // 문자열에서 분리된 숫자들의 합 계산
    this.addNumbers(splitedString);
  }
}

export default App;
