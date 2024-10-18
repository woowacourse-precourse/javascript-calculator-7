import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    const defaultRegExp = /[:,]/g;
    const numbers = input.split(defaultRegExp);
    const result = numbers.map(Number).reduce((acc, cur) => acc + cur, 0);
    MissionUtils.Console.print("결과 : " + result);
  }
}

export default App;
