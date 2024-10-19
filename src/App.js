import { Console } from "@woowacourse/mission-utils";

class App {
  #input;
  separatorList = [",", ":"];

  async run() {
    await this.readInput();
  }

  async readInput() {
    this.#input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (this.isInValidInput()) {
      throw new Error("[ERROR]: 에러입니다.");
    }
  }

  isInValidInput() {
    if (this.#input.startsWith("//")) {
      const lineBreakStringIndex = this.#input.indexOf("\\n");

      if (lineBreakStringIndex !== 3) {
        return true;
      }

      const customSeparator = this.#input[2];

      if (
        this.separatorList.includes(customSeparator) ||
        Number.isInteger(Number(customSeparator))
      ) {
        return true;
      }

      this.separatorList.push(this.#input[2]);

      this.#input = this.#input.substring(5);
    }

    if (
      this.#input.replaceAll(
        new RegExp(`[${this.separatorList.join("")}0-9]`, "g"),
        ""
      ).length !== 0
    ) {
      return true;
    }

    function generateDelimiterCombinations(
      delimiters,
      minLength = 2,
      maxLength = 3
    ) {
      const result = [];

      function backtrack(combination, start) {
        if (combination.length >= minLength) {
          result.push(combination.join(""));
        }

        if (combination.length === maxLength) {
          return;
        }

        for (let i = 0; i < delimiters.length; i++) {
          if (i !== start) {
            // 연속된 같은 구분자 방지
            backtrack([...combination, delimiters[i]], i);
          }
        }
      }

      backtrack([], -1);
      return result;
    }

    const combinations = generateDelimiterCombinations(this.separatorList);

    let isInValid = false;
    combinations.forEach((combination) => {
      if (this.#input.includes(combination)) {
        isInValid = true;
        return;
      }
    });

    return isInValid;
  }
}

export default App;
