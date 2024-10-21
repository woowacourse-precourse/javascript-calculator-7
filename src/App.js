const { Console } = require("@woowacourse/mission-utils");

class StringCalculator {
  run() {
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n", (input) => {
      try {
        const result = this.add(input);
        Console.print(`결과 : ${result}`);
      } catch (error) {
        Console.print(error.message);
      }
    });
  }

  isEmpty(input) {
    return input.trim() === "";
  }

  parseInput(input) {
    const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)$/);

    if (customDelimiterMatch) {
      return {
        delimiters: [customDelimiterMatch[1], ",", ":"],
        numbers: customDelimiterMatch[2],
      };
    }

    return {
      delimiters: [",", ":"],
      numbers: input,
    };
  }

  splitNumbers(numbers, delimiters) {
    const delimiterPattern = new RegExp(`[${delimiters.join("")}]`);
    return numbers.split(delimiterPattern).filter((num) => num !== "");
  }

  add(input) {
    if (this.isEmpty(input)) return 0;
    const { numbers, delimiters } = this.parseInput(input);
    const numberList = this.splitNumbers(numbers, delimiters);
  
    this.validateNumbers(numberList);
  
    return this.sumNumbers(numberList);
  }
  
}

export default App;
