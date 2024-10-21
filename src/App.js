import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. \n"
    );

    const result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    // 기본 구분자는 "," 또는 ":"이다.
    let delimiter = /,|:/;

    const numbers = input.split(delimiter).map((num) => {
      const parsed = Number(num);

      if (isNaN(parsed) || parsed < 0) {
        throw new Error("[ERROR]");
      }

      return parsed;
    });

    // 돌면서 발견되는 수를 누적해서 더하기
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
