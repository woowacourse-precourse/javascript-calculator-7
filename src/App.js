import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  defaultSeparator = ",;";
  customSeparatorRegExr = /\/\/.+\\n/;
  async run() {
    const userInput = await this.getUserInput();
    const stringifiedUserInput = JSON.stringify(userInput);
    const { separator, isCustomSeparator, newUserInput } =
      this.getSeparator(stringifiedUserInput);
    const separatorRegExp = this.getSeparatorRegExp(separator);

    const separatedUserInput = newUserInput.split(separatorRegExp);

    for (const it of separatedUserInput) {
      if (isNaN(it) || Number(it) <= 0) throw new Error("[ERROR]");
    }

    const separatedUserInputsNumberArray = separatedUserInput.map((it) =>
      Number(it)
    );

    const sumOfUserInput = this.getSum(separatedUserInputsNumberArray);

    this.printResult(sumOfUserInput);
  }
  async getUserInput() {
    return await MissionUtils.Console.readLineAsync("문자열을 입력해주세요.");
  }
  getSeparator(str) {
    const customSeparatorMatchedString = str.match(this.customSeparatorRegExr);
    if (customSeparatorMatchedString)
      return {
        separator: customSeparatorMatchedString[0]
          .slice(2, -2)
          .replace("\\", "\\\\"),
        isCustomSeparator: true,
        newUserInput: str.slice(customSeparatorMatchedString[0].length + 1, -1),
      };
    return {
      separator: this.defaultSeparator,
      isCustomSeparator: false,
      newUserInput: str.slice(1, -1),
    };
  }
  getSeparatorRegExp(separator) {
    return new RegExp(`[${separator}]`);
  }
  getSeparatedString(str, separator) {
    return str.split(separator);
  }
  getSum(numberArray) {
    return numberArray.reduce((prev, cur) => prev + cur, 0);
  }
  printResult(str) {
    MissionUtils.Console.print(`결과 : ${str}`);
  }
}

export default App;
