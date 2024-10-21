import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getUserInput();
    const splitedString = this.stringSplitDelimiter(input);
    this.checkInputValidation(splitedString);
    this.addNumbers(splitedString);
  }

  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    return input;
  }

  checkInputValidation(splitedString) {
    if (splitedString.some((num) => num < 0)) {
      Console.print("[ERROR]");
      throw new Error("[ERROR]");
    }

    if (splitedString.some((val) => isNaN(val))) {
      Console.print("[ERROR]");
      throw new Error("[ERROR]");
    }
  }

  stringSplitDelimiter(input) {
    let str = [];

    // 커스텀 구분자 사용 시
    if (inputString[0] === "/" && inputString[1] === "/") {
      const index = inputString.indexOf("\\n");
      const delimiter = inputString.substring(2, index);
      const stringToSplit = inputString.substring(index + 2);
      const regex = new RegExp(`[${delimiter}:,]`);
      str = stringToSplit.split(regex).map(Number);
    } else {
      // 기본 구분자(쉼표, 콜론) 사용 시
      str = inputString.split(/,|:/).map(Number);
    }

    return str;
  }

  sumNumbers(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    Console.print("결과 : " + sum);
  }
}

export default App;
