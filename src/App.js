import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync();

    const seperator = [":", ","];

    const isString = this.isString(input);

    if (isString) {
      Console.print(input);
    }
  }

  isString(input) {
    if (typeof input === "string") {
      return true;
    }

    throw new Error("[ERROR] 문자열을 입력해주세요.");
  }
}

export default App;
