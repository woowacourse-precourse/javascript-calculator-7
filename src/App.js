import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    let formattedInput = input.replace(/\\n/g, "\n");
    let delimiter = /,|:/;
    let nums = [];

    if (!formattedInput) {
      Console.print("결과 : 0");
      return;
    }

    if (formattedInput.startsWith("//")) {
      const parts = formattedInput.split("\n");
      Console.print(parts);

      if (parts.length < 2) {
        Console.print("[ERROR] 구분자 형식을 확인해주세요.");
        return;
      }

      const customDelimiter = parts[0].slice(2);
      delimiter = new RegExp(`[${customDelimiter},:\\n]+`);

      formattedInput = parts[1];
    }

    try {
      formattedInput.split(delimiter).map((item) => {
        let num = Number(item);

        if (isNaN(num) || item.trim() == "" || num < 0) {
          throw "[ERROR] 유효한 숫자가 아닙니다.";
        }

        if (!isNaN(num)) {
          nums.push(num);
        }
      });

      const sum = nums.reduce((acc, cur) => acc + cur, 0);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
