import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async execute() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요\n"
      );
      this.processInput(userInput);
    } catch (err) {
      throw new Error(`[ERROR]: ${err.message}`);
    }
  }

  processInput(inputString) {
    let sum = 0;

    const { separator, startIndex } = this.extractCustomDelimiter(inputString);
    separator && (inputString = inputString.slice(startIndex + 2));

    const splitPattern = new RegExp(`[${separator},:]`);
    const numbers = inputString.split(splitPattern);

    for (let number of numbers) {
      const numValue = Number(number);

      if (isNaN(numValue)) {
        throw new Error(`[ERROR] '${number}' is not a valid number.`);
      }

      if (numValue < 0) {
        throw new Error(`[ERROR] Number should be non-negative.`);
      }

      sum += numValue;
    }

    MissionUtils.Console.print(`결과 : ${sum}`);
  }

  extractCustomDelimiter(input) {
    let delimiter;
    let newIndex = 0;

    if (input.startsWith("//")) {
      newIndex = input.indexOf("\\n");
      delimiter = newIndex !== -1 ? input.slice(2, newIndex) : null;
    }

    return { separator: delimiter, startIndex: newIndex };
  }
}

export default App;
