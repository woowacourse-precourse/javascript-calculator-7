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
    }
  }

  sumNumExceptString(input) {
    let numArray = [];
    if (input.startsWith("//") && input.includes("\n")) {
      const separator = input.slice(2, input.indexOf("\n"));
      const numAndString = input.slice(input.indexOf("\n") + 1);
      numArray = numAndString.split(separator);
    } else {
      const regex = /[^0-9]/g;
      numArray = input.replace(regex, "");
    }
    return this.sumNum(numArray);
  }
}

export default App;
