import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {
    try {
      // 문자열 입력
      Console.print("덧셈할 문자열을 입력해 주세요.");
      const input = await Console.readLineAsync("");

      let words;

      // 커스텀 구분자
      if (input.startsWith("//") && input.substring(3, 5) === "\\n") {
        words = input.substring(5).split(input[2]).map(Number);
      } else {
        // 기본 구분자
        words = input.split(/[,|:]/).map(Number);
      }

      // 빈 문자열 입력시 0 출력 후 종료
      if (input.trim() === "") {
        Console.print("결과 : 0")
        return;
      }

      // NaN, null, undefined 체크
      if (words.some(word => isNaN(word) || word === null || word === undefined)) {
        throw new Error("[ERROR] 올바른 값을 입력해주세요.");
      }

      // 양수만 허용
      const isPositiveInt = (word) => /^\d+$/.test(word);

      if (!words.every(word => isPositiveInt(word))) {
        throw new Error("[ERROR] 양수만 입력해주세요.")
      }

      const sum = words.reduce((acc, curr) => acc + curr);
        Console.print("결과 : " + sum);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
