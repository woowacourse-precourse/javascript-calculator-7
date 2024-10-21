import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      `덧셈할 문자열을 입력해 주세요.\n`
    );
    try {
      const result = this.sumNumExceptString(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  sumNumExceptString(input) {
    let numArray = [];
    if (input.startsWith("//") && input.includes("\n")) {
      const separator = input.slice(2, input.indexOf("\n"));
      const numAndString = input.slice(input.indexOf("\n") + 1);
      numArray = numAndString.split(separator);
    } else {
      numArray = input.match(/-?\d+/g) || [];
    }
    return this.sumNum(numArray);
  }
  sumNum(numArray) {
    return numArray.reduce((acc, current) => {
      const num = Number(current);
      if (isNaN(num) || num < 0) {
        throw new Error(
          "[ERROR] 구분자와 양수로 구성된 문자열을 입력해주세요."
        );
      }
      return acc + num;
    }, 0);
  }
}
export default App;
