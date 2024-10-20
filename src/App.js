import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const numbers = input.split(/[,:]/);
    let answer = 0;
    for (let n of numbers) {
      answer += Number(n);
    }
    if (typeof answer !== NaN) {
      Console.print("[ERROR]");
      throw new Error();
    } else {
      Console.print(`결과 : ${answer}`);
    }
  }
}

export default App;
