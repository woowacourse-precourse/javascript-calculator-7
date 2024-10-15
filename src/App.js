import { Console } from "@woowacourse/mission-utils";

class App {
  defaultSeparator = ",;";
  customSeparatorRegExr = /\/\/.+\\n/;
  async run() {
    const userInput = await this.getUserInput();
    const separator = this.getSeparator(userInput);

    let separatedUserInput;
    if (this.customSeparatorRegExr.test(userInput))
      separatedUserInput = this.getSeparatedString(
        userInput.split(this.customSeparatorRegExr)[1],
        separator
      );
    else separatedUserInput = this.getSeparatedString(userInput, separator);
  }
  async getUserInput() {
    return await Console.readLineAsync("문자열을 입력해주세요.");
  }
  getSeparator(str) {
    const customSeparatorMatchedString = str.match(this.customSeparatorRegExr);
    if (
      customSeparatorMatchedString &&
      customSeparatorMatchedString.index === 0
    )
      return customSeparatorMatchedString[0].slice(2, -2);

    return this.defaultSeparator;
  }
  getSeparatedString(str, separator) {
    return str.split(separator);
  }
  getSum(numberArray) {
    return numberArray.reduce((prev, cur) => prev + cur, 0);
  }
}

export default App;
