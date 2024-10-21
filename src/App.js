import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈을 입력하세요");
    let divider = [":", ","];
    let userInput = await MissionUtils.Console.readLineAsync("");
    if (userInput.startsWith("//")) {
      const parts = userInput.split("\\n");
      const customDivider = parts[0].substring(2);
      divider.push(customDivider);
      userInput = parts[1];
    }
    const dividerPattern = new RegExp(`[${divider.join("")}]`);
    const numberList = userInput.split(dividerPattern);
    MissionUtils.Console.print(numberList);
  }
}

export default App;
