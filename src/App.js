import { Console } from "@woowacourse/mission-utils";

class App {
  defaultSeparator = ",;";
  customSeparatorRegExr = /\/\/.+\\n/;
  async run() {
    const userInput = await this.getUserInput();
    const separator = this.getSeparator(userInput);
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
}

export default App;
