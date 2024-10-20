import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    let inputString = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    inputString = inputString.split(/[,:]/);
    let sum = 0;
    sum = inputString.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    MissionUtils.Console.print(sum);
  }
}
export default App;
