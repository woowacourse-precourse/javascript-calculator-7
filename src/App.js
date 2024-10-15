import { Console } from "@woowacourse/mission-utils";

class App {
  defaultSeperator = /,;/;
  async run() {
    const userInput = await this.getUserInput();
    const separator = this.getSeparator(userInput);
  }
  async getUserInput() {
    return await Console.readLineAsync("문자열을 입력해주세요.");
  }
  getSeparator(str) {
    const separatorRegExr = /\/\/.\\n/;
    if (separatorRegExr.test(str.slice(0, 5))) return str.at(2);
    return this.defaultSeperator;
  }
}

export default App;
