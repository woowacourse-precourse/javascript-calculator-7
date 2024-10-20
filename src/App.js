import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열 입력: "
      );
      if (!input) {
        throw new Error("문자열을 입력하세요");
      }
      let delimiter = /[,:]/;
      let sum = 0;
      let customDelimiter;
      let numbers;
      console.log(customDelimiter);
      if (input.startsWith("//") && input.includes("\\n")) {
        const newlineIndex = input.indexOf("\\n");
        customDelimiter = input.slice(2, newlineIndex);

        if (customDelimiter.length > 1) {
          throw new Error("커스텀 구분자는 한 글자여야합니다.");
        }
        if (!isNaN(Number(customDelimiter))) {
          throw new Error("숫자는 구분자로 사용할 수 없습니다.");
        }
        numbers = input.slice(newlineIndex + 1).split(customDelimiter);
      } else {
        numbers = input.split(delimiter);
      }
      const numberArray = numbers.map((num) => {
        const parsedNum = Number(num);
        if (!isNaN(Number(parsedNum))) {
          throw new Error("숫자가 아닌 문자열은 사용할 수 없습니다.");
        }
      });
      sum = numberArray.reduce((acc, cur) => acc + cur, 0);
      MissionUtils.Console.print(`값: ${sum}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
