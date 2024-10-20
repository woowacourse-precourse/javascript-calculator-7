import { Console } from "@woowacourse/mission-utils";
import {
  checkEmptyString,
  checkSingleNumber,
  checkForDefaultDelimiter,
  checkForMismatchedDelimiter,
  validateNumbers,
} from "./utils/checkers.js";
import {
  extractCustomDelimiter,
  getNumberString,
  parseNumbers,
} from "./utils/parsers.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`${error.message}(${error.name})\n`);
      throw error;
    }
  }

  // 문자열 유효 여부 확인 후, 숫자 배열 합 반환
  calculateSum(input) {
    checkEmptyString(input);
    const customDelimiter = extractCustomDelimiter(input);
    let numberString = getNumberString(input, customDelimiter);

    if (checkSingleNumber(numberString)) {
      return Number(numberString);
    }

    if (customDelimiter) {
      checkForMismatchedDelimiter(numberString, customDelimiter);
    } else {
      checkForDefaultDelimiter(numberString);
    }

    const numbers = parseNumbers(numberString, customDelimiter);
    validateNumbers(numbers);

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
