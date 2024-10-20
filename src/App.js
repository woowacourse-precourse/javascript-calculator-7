import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;
const DEFAULT_DELIMITER = /,|:/;
const ERROR_MESSAGES = {
  INVALID_DELIMITER: "[ERROR] 잘못된 구분자 형식입니다.",
  INVALID_NUMBER: "[ERROR] 잘못된 값이 입력되었습니다.",
  NEGATIVE_NUMBER: "[ERROR] 음수가 입력되었습니다.",
};

class App {
  async receiveInput() {
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  getDelimiter(str) {
    if (!str.startsWith("//")) {
      return DEFAULT_DELIMITER;
    }

    const match = str.match(/\/\/(.)\\n/);
    if (!match) {
      throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);
    }

    const [_, customDelimiter] = match;
    return new RegExp(`${DEFAULT_DELIMITER.source}|${customDelimiter}`);
  }

  getNumbers(str, delimiter) {
    if (!str.startsWith("//")) {
      return str.split(delimiter);
    }

    const numbersPart = str.substring(str.indexOf("\\n") + 2);
    return numbersPart.split(delimiter);
  }

  getSum(numbers) {
    return numbers
      .map(Number)
      .reduce((total, num) => total + num, 0);
  }

  checkNumbers(numbers) {
    numbers.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
      }
      if (Number(num) < 0) {
        throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
      }
    });
  }

  async run() {
    try {
      const str = await this.receiveInput();
      const delimiter = this.getDelimiter(str);
      const numbers = this.getNumbers(str, delimiter);

      this.checkNumbers(numbers);

      const result = this.getSum(numbers);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;