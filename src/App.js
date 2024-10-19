import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      /** 구분자 목록 */
      const SEPARATORS = [",", ":"];

      /** 입력 값 */
      const input = await Console.readLineAsync("문자열을 입력해주세요.\n");

      /** 구분자 정규표현식 */
      const separatorRegex = new RegExp(
        SEPARATORS.map((s) => `\\${s}`).join("|")
      );

      const numberArray = input
        .split(separatorRegex)
        .map(Number)
        .filter((n) => !isNaN(n));

      /** 출력 값 */
      const sum = numberArray.reduce((acc, curr) => acc + curr, 0);

      Console.print(sum);
    } catch (error) {}
  }
}

export default App;
