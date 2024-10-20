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

    let delimiter = [",", ":"];

    // 커스텀 구분자 처리
    if (input.startsWith("//")) {
      const parts = input.split("\n");
      if (parts.length < 2) {
        throw new Error("커스텀 구분자 형식이 잘못되었습니다.");
      }
      delimiter.push(parts[0].substring(2)); // "//" 이후 문자
      input = parts[1]; // 첫 번째 줄 이후의 내용
    }

    // 숫자 추출 및 합산
    const numbers = input.split(new RegExp(delimiter.join("|"))).map((num) => {
      const parsedNum = parseInt(num.trim(), 10);
      if (isNaN(parsedNum) || parsedNum < 0) {
        throw new Error("음수를 입력할 수 없습니다.");
      }
      return parsedNum;
    });

    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
