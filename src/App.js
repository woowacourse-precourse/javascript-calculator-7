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
  
  add(input) {
    if (this.isEmpty(input)) return 0;
    const { numbers, delimiters } = this.parseInput(input);
    const numberList = this.splitNumbers(numbers, delimiters);
  
    this.validateNumbers(numberList);
  
    return this.sumNumbers(numberList);
  }
  
}

export default App;
