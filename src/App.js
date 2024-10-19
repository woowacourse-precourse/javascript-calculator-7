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
      str = stringToSplit.split(delimiter).map(Number);
    } else {
      // 기본 구분자(쉼표, 콜론) 사용 시
      str = inputString.split(/,|:/).map(Number);
    }

    return str;
  }

  async run() {
    const inputString = await this.getInputString();
    const splitedString = this.stringSplitDelimiter(inputString);
  }
}

export default App;
