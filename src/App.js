import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_SEPARATOR, ERROR_MESSAGES } from "./constant.js";

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

    // 줄 바꿈 문자가 없는 경우 예외 처리
    if (newlineIndex === -1) {
      throw new Error(ERROR_MESSAGES.INVALID_FORMAT);
    }

    customSeparator = input.substring(2, newlineIndex);

    inputData = input.substring(newlineIndex + 2);

    validateCustomSeparator(customSeparator);
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

    validateNumber(num);

    return acc + num;
  }, 0);

  return sum;
}

// 커스텀 구분자가 기본 구분자와 겹치는 경우 예외 처리
function validateCustomSeparator(customSeparator) {
  if (DEFAULT_SEPARATOR.includes(customSeparator)) {
    throw new Error(ERROR_MESSAGES.INVALID_CUSTOM_SEPERATOR);
  }
}

// 숫자가 아니거나 음수인 경우 예외 처리
function validateNumber(num) {
  if (isNaN(num)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }

  if (num < 0) {
    throw new Error(ERROR_MESSAGES.NEGATIVE_NOT_ALLOWED);
  }
}

export default App;
