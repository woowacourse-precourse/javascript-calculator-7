import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInputString = await this.getUserInputString();
    const separatorString = this.getSeperatorString(userInputString);
  }
  async getUserInputString() {
    return await Console.readLineAsync("문자열을 입력해주세요.");
  }
  getSeperatorString(str) {
    const seperatorRegExr = /\/\/.\\n/;
    if (seperatorRegExr.test(str.slice(0, 5))) return str.at(2);
  }
}

export default App;
