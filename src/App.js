import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    let input_string = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    input_string = input_string.split(/[,:]/);
    let sum = 0;
    input_string.forEach((n) => {
      sum += Number(n);
    });
    // 덧셈결과 출력
    MissionUtils.Console.print(sum);
  }
}
export default App;
