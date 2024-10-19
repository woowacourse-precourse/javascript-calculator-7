import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (input === "") {
      MissionUtils.Console.print("결과 : 0");
      return;
    }

    let numbers = [];
    const customDelimiterMatch = input.match(/^\/\/(.)\\n(.*)/);

    if (customDelimiterMatch) {
      const customDelimiter = customDelimiterMatch[1];
      const numberPart = customDelimiterMatch[2];
      numbers = numberPart.split(new RegExp(`[${customDelimiter}]`));
    } else {
      numbers = input.split(/[,:]/);
    }

    console.log("분리된 숫자:", numbers);
  }
}

export default App;
