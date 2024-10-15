import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await this.getUserInput();
    const separator = this.getSeperator(userInput);
  }
  async getUserInput() {
    return await Console.readLineAsync("문자열을 입력해주세요.");
  }
  getSeperator(str) {
    const seperatorRegExr = /\/\/.\\n/;
    if (seperatorRegExr.test(str.slice(0, 5))) return str.at(2);
  }
}

export default App;
