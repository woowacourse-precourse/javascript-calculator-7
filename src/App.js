import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    try {
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  calculateSum(input) {
    if (input === "") return 0;

    let delimiters = [",", ":"];

    // 커스텀 구분자 처리
    if (input.startsWith("//")) {
      const parts = input.split("\\n"); // 1. 여기서 split("\\n")을 사용하여 구분합니다.
      if (parts.length < 2) {
        throw new Error("[ERROR] 커스텀 구분자 형식이 잘못되었습니다.");
      }
      delimiters.push(parts[0].substring(2)); // 커스텀 구분자를 배열에 추가합니다.
      input = parts[1]; // 첫 번째 줄 이후의 내용
    }

    // 숫자 추출 및 합산
    const numbers = input
      .split(new RegExp(`[${delimiters.join("|")}]`)) // 2. 여기서 join("|")을 사용하여 정규식을 만듭니다.
      .map((num) => {
        const parsedNum = parseInt(num.trim(), 10);
        if (isNaN(parsedNum)) {
          throw new Error("[ERROR] 잘못된 숫자 형식이 포함되어 있습니다.");
        }
        if (parsedNum < 0) {
          throw new Error("[ERROR] 음수를 입력할 수 없습니다.");
        }
        return parsedNum;
      });

    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
