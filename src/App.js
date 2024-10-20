import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      /** 기본 구분자 목록 */
      const DEFAULT_SEPARATORS = [",", ":"];

      /** 입력 값 */
      const input = await Console.readLineAsync("문자열을 입력해주세요.\n");

      /** 커스텀 구분자 목록 */
      let separators = DEFAULT_SEPARATORS;
      /** 숫자 값들 */
      let numbers = input;

      // 커스텀 구분자 처리
      if (input.startsWith("//")) {
        const newLineIndex = input.toString().indexOf("\\n");
        if (newLineIndex === -1) {
          throw new Error("[ERROR]");
        }
        const customSeparator = input.substring(2, newLineIndex);
        separators = [customSeparator];
        numbers = input.substring(newLineIndex + 2);
      }

      /** 구분자 정규표현식 */
      const separatorRegex = new RegExp(
        separators.map((s) => `\\${s}`).join("|")
      );

      const numberArray = numbers.split(separatorRegex).map((n) => {
        const num = Number(n);
        if (isNaN(num) || num < 0) {
          throw new Error("[ERROR]");
        }
        return num;
      });

      /** 출력 값 */
      const sum = numberArray.reduce((acc, curr) => acc + curr, 0);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
