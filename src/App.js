import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");

      if (input.trim() === "") {
        Console.print(0);
        return;
      }
      const isQuote = (input) => /['"]+/.test(input);
      const isPositive = (input) => /^[+]?[1-9]\d*(\.\d+)?$/.test(input);

      let delimiters = [",", ":"];

      const customDelimiterRegex = /\/\/([^a-zA-Z0-9])\\n/g;

      const hasRepeatOperator = (input) => /[,:]{2,}/.test(input);
      const hasRepeatCustomOperator = (input) =>
        /\/\/[^a-zA-Z0-9]{2,}\\n/.test(input);

      const match = [...input.matchAll(customDelimiterRegex)];
      const inputCustomDelimiters = match.map((match) => match[1]);

      if (match.length > 0) {
        delimiters.push(...inputCustomDelimiters);
        input = input.replace(/\/\/|\\n/g, "");
      }

      if (hasRepeatCustomOperator(input)) {
        throw new Error("[ERROR]커스텀 구분자는 연속으로 입력이 불가능합니다.");
      }

      if (hasRepeatOperator(input)) {
        throw new Error("[ERROR]구분자는 연속으로 입력이 불가능합니다.");
      }

      const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
      let numberString = input
        .split(delimiterRegex)
        .filter((num) => num !== "");
      let sum = 0;

      for (let num of numberString) {
        if (isQuote(num)) {
          throw new Error(
            "[ERROR]입력 값은 단일 따옴표(')나 이중 따옴표(\")를 제외하고 입력해야합니다."
          );
        }
        if (!isPositive(num)) {
          throw new Error("[ERROR]입력 값은 양수여야 합니다.");
        }
        sum += parseInt(num, 10);
      }

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
