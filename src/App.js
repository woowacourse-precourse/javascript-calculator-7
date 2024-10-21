import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요: "
    );
    const result = this.add(input);
    Console.print(`결과 : ${result}`);
  }

  add(input) {
    if (!input) {
      return 0;
    }
    let delimeter = /,|:/;
    let input_string = input;

    if (input.startsWith("//")) {
      const custom_delimeter_end = input.indexOf("\\n");
      if (custom_delimeter_end === -1) {
        throw new Error("[ERROR] 잘못된 입력입니다.");
      }

      const custom_delimeter = input
        .substring(2, custom_delimeter_end)
        .replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      delimeter = new RegExp(custom_delimeter);
      input_string = input.substring(custom_delimeter_end + 2);
    }

    const numbers = input_string.split(delimeter).map((num) => {
      const parsed_num = parseInt(num, 10);
      if (isNaN(parsed_num) || parsed_num < 0) {
        throw new Error("[ERROR]");
      }
      return parsed_num;
    });

    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
