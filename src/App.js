import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      if (!INPUT) {
        throw new Error("문자열을 입력하세요");
      }
      let delimiter = /[,:]/;
      let sum = 0;
      let customDelimiter;
      let numbers;

      if (INPUT.startsWith("//") && INPUT.includes("\\n")) {
        const NEW_LINE_INDEX = INPUT.indexOf("\\n");
        customDelimiter = INPUT.slice(1, NEW_LINE_INDEX);

        if (customDelimiter.length > 1) {
          throw new Error("커스텀 구분자는 한 글자 이상이면 안됩니다.");
        }
        if (customDelimiter.length === 0) {
          throw new Error("커스텀 구분자는 한 글자여야합니다.");
        }
        if (!isNaN(Number(customDelimiter))) {
          throw new Error("숫자는 구분자로 사용할 수 없습니다.");
        }
        numbers = INPUT.slice(NEW_LINE_INDEX + 1).split(customDelimiter);
      } else {
        numbers = INPUT.split(delimiter);
      }
      const NUMBER_ARRAY = numbers.map((num) => {
        const PARSED_NUM = Number(num);
        if (isNaN(Number(PARSED_NUM))) {
          throw new Error("숫자가 아닌 문자열은 사용할 수 없습니다.");
        }
        if (PARSED_NUM < 0) {
          throw new Error("음수는 입력할 수 없습니다.");
        }

        return PARSED_NUM;
      });

      sum = NUMBER_ARRAY.reduce((acc, cur) => acc + cur, 0);
      MissionUtils.Console.print(`결과 : ${sum}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
