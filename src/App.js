import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    try {
      const result = this.handlingInput(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
      return;
    }
  }

  handlingInput(input) {
    const DEFAULT = [",", ":"];
    const defaultSeparator = new RegExp(DEFAULT.join("|")); // 정규 표현식: /,|:/
    let numbers = [];

    if (input === "") {
      return 0;
    } else if (input.startsWith("//") && input.includes("\\n")) {
      const { customSeparator, numberPart } = trimCustom(input);

      const combinedSeparator = new RegExp(
        `${customSeparator}|${DEFAULT.join("|")}`
      );

      numbers = numberPart.split(combinedSeparator);
      return calculate(numbers);
    } else {
      numbers = input.split(defaultSeparator);
      return calculate(numbers);
    }
  }
}

function trimCustom(str) {
  const customParts = str.split("//")[1];
  const [customSeparator, numberPart] = customParts.split("\\n"); // [0]: 커스텀 구분자 [1]: 문자열 부분

  return { customSeparator, numberPart };
}

function calculate(numbers) {
  const invalidInputs = numbers.filter((num) => isNaN(Number(num))); // 숫자가 아닌 값
  const negativeInputs = numbers.filter((num) => Number(num) < 0); // 음수 값
  if (invalidInputs.length > 0) {
    throw new Error(`[ERROR] Invalid input: ${invalidInputs.join(", ")}`);
  }
  if (negativeInputs.length > 0) {
    throw new Error(`[ERROR] Negative input: ${negativeInputs.join(", ")}`);
  }

  return numbers.reduce((sum, num) => sum + Number(num), 0);
}

export default App;
