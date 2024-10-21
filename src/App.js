import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_SEPARATOR } from "./constant.js";

class App {
  async run() {
    try {
      const inputStr = await Console.readLineAsync("문자열을 입력해주세요.\n");

      const { customSeparator, inputData } = getSeparatorAndData(inputStr);

      const result = sumNumbers(inputData, customSeparator);

      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

// 커스텀 구분자 처리 함수
function getSeparatorAndData(input) {
  let customSeparator;
  let inputData = input;

  if (!input) return { customSeparator: "", inputData: "0" };

  if (input.startsWith("//")) {
    const newlineIndex = input.indexOf("\\n");

    customSeparator = input.substring(2, newlineIndex);

    inputData = input.substring(newlineIndex + 2);
  } else {
    customSeparator = new RegExp(`[${DEFAULT_SEPARATOR.join("")}]`);
    inputData = input;
  }

  return { customSeparator, inputData };
}

// 숫자 합산 함수
function sumNumbers(numbers, customSeparator) {
  const splitNumbers = numbers.split(customSeparator);

  const sum = splitNumbers.reduce((acc, current) => {
    const num = parseInt(current, 10);

    return acc + num;
  }, 0);

  return sum;
}

export default App;
