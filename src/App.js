import { Console } from "@woowacourse/mission-utils";

class App {
  defaultSeparator = ",;";
  customSeparatorRegExr = /\/\/.+\\n/;
  async run() {
    const userInput = await this.getUserInput();
    const separator = this.getSeparator(userInput);
    const separatorRegExp = this.getSeparatorRegExp(separator);

    let separatedUserInput;
    if (this.customSeparatorRegExr.test(userInput))
      separatedUserInput = this.getSeparatedString(
        userInput.split(this.customSeparatorRegExr)[1],
        separatorRegExp
      );
    else
      separatedUserInput = this.getSeparatedString(userInput, separatorRegExp);

    for (const it of separatedUserInput) {
      if (isNaN(it) || Number(it) <= 0) throw new Error("[ERROR]");
    }

    const separatedUserInputsNumberArray = separatedUserInput.map((it) =>
      Number(it)
    );

    const sumOfUserInput = this.getSum(separatedUserInputsNumberArray);

    Console.print(`결과 : ${sumOfUserInput}`);
  }
  async getUserInput() {
    return await Console.readLineAsync("문자열을 입력해주세요.");
  }
  getSeparator(str) {
    const customSeparatorMatchedString = str.match(this.customSeparatorRegExr);
    if (customSeparatorMatchedString)
      return customSeparatorMatchedString[0].slice(2, -2);

    return this.defaultSeparator;
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
}

export default App;
