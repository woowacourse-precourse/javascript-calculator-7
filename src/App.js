import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;

class App {
  async run() {
    try {
      let result = 0;
      let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      let separator = "";

      if (input.indexOf("//") === 0 && input.indexOf("\\n") > 2) {
        separator = input.slice(2, input.indexOf("\\n"));
        input = input.slice(input.indexOf("\\n") + 2);
        input = input.replaceAll(separator, ",");
      }

      input = input.replaceAll(":", ",");
      const arr = input.split(",");

      for (const el of arr) {
        if (el === "") {
          continue;
        } else {
          const number = +el;
          if (Number.isNaN(number) || number < 0) {
            throw new Error("[ERROR]"); // 예외를 명확하게 throw 합니다.
          } else {
            result += number;
          }
        }
      }
      Console.print(`결과 : ${result}`);
    } catch (err) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
