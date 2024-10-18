import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
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
      const sumResult = numbers
        .map((number) => {
          const formatNumber = Number(number);
          if (formatNumber >= 0) {
            return formatNumber;
          }
          throw new Error("유효하지 않은 숫자입니다.");
        })
        .reduce((acc, cur) => acc + cur, 0);
      MissionUtils.Console.print("결과 : " + sumResult);
    } catch (error) {
      throw new Error("[ERROR]" + error);
    }
  }
}

export default App;
