import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_SEPARATOR } from "./constant.js";

class App {
  async run() {
    try {
      const inputStr = await Console.readLineAsync("문자열을 입력해주세요.\n");

      const separator = new RegExp(`[${DEFAULT_SEPARATOR.join("")}]`);

      const result = inputStr ? sumNumbers(inputStr, separator) : 0;

      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

// 숫자 합산 함수
function sumNumbers(numbers, separator) {
  const splitNumbers = numbers.split(separator);

  const sum = splitNumbers.reduce((acc, current) => {
    const num = parseInt(current, 10);

    return acc + num;
  }, 0);

  return sum;
}

export default App;
