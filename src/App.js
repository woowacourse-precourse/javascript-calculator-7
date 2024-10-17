import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync();

    const seperator = [":", ","];

    const isString = await this.isString(input);

    if (isString) {
      Console.print(input);
    }
  }

  async isString(input) {
    if (typeof input === "string") {
      return true;
    }

    throw new Error("[ERROR] 문자열을 입력해주세요.");
  }
}

export default App;
