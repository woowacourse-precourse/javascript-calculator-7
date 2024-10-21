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
}

export default App;
