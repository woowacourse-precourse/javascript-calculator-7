import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 입력을 받는다.
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      if (input.length === 0) {
        MissionUtils.Console.print("결과 : 0");
        return;
      }

      if (this.isValidInput(input)) {
        const resultArray = this.separateInput(input);
        const result = this.add(resultArray);
        MissionUtils.Console.print(`결과 : ${result}`);
      } else {
        throw new Error("[ERROR] 유효한 입력값이 아닙니다.");
      }
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }

  // 유효한 입력값인지 확인하는 함수
  isValidInput(input) {
    if (input.length === 0) {
      MissionUtils.Console.print("결과 : 0");
      return false;
    }
    return true;
  }

  separateInput(input) {
    // 커스텀 구분자로 시작하는 경우
    if (input.startsWith("/")) {
      const [letter, number] = input.split(/\\n/);
      if (!letter.startsWith("//") || !number) {
        throw new Error("[ERROR]");
      }

      const separator = letter.substring(2);
      const result = number.split(separator);
      return result.map((item) => this.parseNumber(item));
    }

    if (!isNaN(Number(input[0]))) {
      const result = input.split(/[,;]/);
      return result.map((item) => this.parseNumber(item));
    }

    throw new Error("[ERROR]");
  }

  parseNumber(item) {
    const num = Number(item);
    if (isNaN(num)) {
      throw new Error("[ERROR] 구분자를 제외하고는 숫자를 입력해주세요.");
    }

    if (num < 0) {
      throw new Error("[ERROR] 양수를 입력해주세요.");
    }

    return num;
  }

  add(resultArray) {
    return resultArray.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
