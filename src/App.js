import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const nums = [];
    let formattedInput = input.replace(/\\n/g, "\n");
    let delimiter = /,|:/;

    if (!formattedInput) {
      Console.print("결과 : 0");
      return;
    }

    if (formattedInput.startsWith("//")) {
      const parts = formattedInput.split("\n");

      if (parts.length < 2) {
        throw new Error("[ERROR] 구분자 형식을 확인해주세요.");
      }

      const customDelimiter = parts[0].slice(2);
      delimiter = new RegExp(`[${customDelimiter},:\\n]+`);

      formattedInput = parts[1];
    }

    formattedInput.split(delimiter).map((item) => {
      let num = Number(item);

      if (isNaN(num)) {
        throw new Error("[ERROR] 유효한 숫자가 아닙니다.");
      }
      if (num < 0) {
        throw new Error("[ERROR] 양수가 아닙니다.");
      }

      nums.push(num);
    });

    const sum = nums.reduce((acc, cur) => acc + cur, 0);

    try {
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
