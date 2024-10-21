import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const DEFAULT = [",", ":"];
    const defaultSeparator = new RegExp(DEFAULT.join("|")); // 정규 표현식: /,|:/
    let numbers = [];
    let result;

    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    try {
      if (input === "") {
        result = 0;
      } else if (input.startsWith("//") && input.includes("\\n")) {
        const { customSeparator, numberPart } = trimCustom(input);
        numbers = numberPart.split(customSeparator);

        result = calculate(numbers);
      } else {
        numbers = input.split(defaultSeparator);

        result = calculate(numbers);
      }
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
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
  if (invalidInputs.length > 0) {
    throw new Error(`[ERROR] Invalid input: ${invalidInputs.join(", ")}`);
  }
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}

export default App;
