import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요: "
      );

      if (!input) {
        Console.print("결과 : 0");
        return;
      }

      // 문자열만 입력된 경우 에러 처리
      if (/^[^0-9]*$/.test(input)) {
        throw new Error("[ERROR] 숫자가 입력되지 않음");
      }

      // 구분자가 없는 경우 에러 처리 (숫자만 입력된 경우)
      if (/^\d+$/.test(input)) {
        throw new Error("[ERROR] 구분자가 포함되지 않은 문자열");
      }

      // 기본 구분자
      const defaultPattern = /[,:]/;

      const numbers = input.split(defaultPattern).map((value) => {
        // 구분자가 아닌 문자열이나 음수가 입력된 경우 에러 처리
        if (isNaN(value) || Number(value) < 0) {
          throw new Error("[ERROR] 바르지 않은 문자열 혹은 음수가 포함됨");
        }
        return Number(value);
      });

      const sum = numbers.reduce((acc, num) => acc + num, 0);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

const app = new App();
app.run();

export default App;
