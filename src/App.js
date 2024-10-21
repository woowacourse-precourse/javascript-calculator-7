import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputValue = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const customSeparator = inputValue.startsWith("//") && inputValue[2];

    const numbers = customSeparator ? inputValue.split("\\n")[1] : inputValue;

    const splitedValueArray = numbers
      .split(",")
      .map((value) => {
        if (value.includes(":")) {
          return value.split(":");
        }

        return value;
      })
      .flat()
      .map((value) => {
        if (customSeparator && value.includes(customSeparator)) {
          return value.split(customSeparator);
        }

        return value;
      })
      .flat();

    const sum = splitedValueArray.reduce((acc, curr) => acc + Number(curr), 0);

    if (splitedValueArray.some((value) => Number(value) <= 0)) {
      throw new Error("[ERROR]양수의 올바른 숫자를 입력해 주세요.");
    } else if (Number.isNaN(sum)) {
      throw new Error("[ERROR]형식에 맞게 문자열을 입력해 주세요.");
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
