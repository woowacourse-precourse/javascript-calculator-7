import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    const defaultRegExp = /[:,]/g;
    const customRegExp = /^\/\/(.*?)\\n/;
    const customMatch = input.match(customRegExp);
    let numbers;

    if (customMatch === null) {
      numbers = input.split(defaultRegExp);
    } else {
      numbers = input.slice(customMatch[0].length).split(customMatch[1]);
    }
    const sumResult = numbers.map(Number).reduce((acc, cur) => acc + cur, 0);
    MissionUtils.Console.print("결과 : " + sumResult);
  }
}

export default App;
