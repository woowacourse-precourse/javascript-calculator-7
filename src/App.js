import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈을 입력하세요");
    let divider = [":", ","];
    let resultNumber = [];
    let userInput = await MissionUtils.Console.readLineAsync("");
    if (userInput.startsWith("//")) {
      const parts = userInput.split("\\n");
      const customDivider = parts[0].substring(2);
      divider.push(customDivider);
      userInput = parts[1];
    }
    const dividerPattern = new RegExp(`[${divider.join("")}]`);
    const numberList = userInput.split(dividerPattern);
    numberList.forEach((num) => {
      if (num) {
        const value = parseInt(num);
        if (isNaN(value)) {
          MissionUtils.Console.print("[ERROR] 잘못된 입력입니다.");
        }
        if (value < 0) {
          MissionUtils.Console.print("[ERROR] 음수는 허용되지 않습니다.");
        }
        resultNumber.push(value);
      }
    });
    MissionUtils.Console.print(resultNumber);
    const sum = resultNumber.reduce((sum, cur) => sum + cur, 0);
    MissionUtils.Console.print(sum);
  }
}

export default App;
