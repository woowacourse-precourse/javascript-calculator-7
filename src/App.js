import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getInput();
    const { inputString, delimiters } = this.splitInput(input);
    if (inputString === "0") {
      MissionUtils.Console.print("결과 : 0");
      return;
    }
  }

  async getInput() {
    return await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
  }

  splitInput(inputString) {
    if (!inputString) return { inputString: "0", delimiters: [] };

    const delimiters = [",", ":"];

    if (inputString.startsWith("//")) {
      if (inputString[3] === "\\" && inputString[4] === "n") {
        const customDelimiter = inputString[2];
        delimiters.push(customDelimiter);
        inputString = inputString.slice(5);
      } else {
        throw new Error(
          "[ERROR] 올바르지 않은 형식입니다. 입력 값을 다시 확인해주세요."
        );
      }
    }

    return { inputString, delimiters };
  }
}

export default App;
