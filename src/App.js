import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.seperators = [",", ":"];
  }

  async run() {
    const userInput = await getUserInput();
    this.getCustomSeperator(userInput);
  }

  async read(input) {
    return MissionUtils.Console.readLineAsync(input);
  }

  print(input) {
    return MissionUtils.Console.print(input);
  }

  async getUserInput() {
    return await this.read("덧셈할 문자열을 입력해 주세요.");
  }

  getCustomSeperator(input) {
    const CUSTOM_SEPERATOR_START = "//";
    const CUSTOM_SEPERATOR_END = "\\n";

    if (
      input.startsWith(CUSTOM_SEPERATOR_START) &&
      input.includes(CUSTOM_SEPERATOR_END)
    ) {
      const startIndex = CUSTOM_SEPERATOR_START.length;
      const endIndex = input.indexOf(CUSTOM_SEPERATOR_END);

      const customSeperator = input.slice(startIndex, endIndex);

      if (customSeperator.length === 0) {
        throw new Error("[ERROR] 커스텀 구분자의 길이는 0일 수 없습니다.");
      }

      this.seperators.push(customSeperator);
    }
  }
}

export default App;
