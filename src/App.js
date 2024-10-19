import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    const SPLITS = INPUT.split(/,|:/);
    Console.print(SPLITS);
    let sum = 0;
    for (let i = 0; i < SPLITS.length; i++) {
      sum += parseInt(SPLITS[i]);
    }
    Console.print("결과 : " + sum);
  }
}

export default App;
