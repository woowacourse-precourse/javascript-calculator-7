import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력받기
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 빈 문자열 처리
    if (input === "") {
      return Console.print("결과 : 0");
    }

    // 기본 구분자 
    const separators = [",", ":"];
    for (const separator of separators) {
      input = input.split(separator).join(",");
    }

    // 커스텀 구분자 
    if (input.startsWith("//")) {
      const customSeparator = input.charAt(2); 
      input = input.split(/\n/)[1]; 
      input = input.split(customSeparator).join(","); 
    }

    // 잘못된 입력값 처리
    const numbers = input.split(",").map(num => Number(num.trim()));
    if (numbers.some(num => isNaN(num) || num < 0)) {
      return Console.print("[ERROR] 음수 또는 잘못된 값을 입력했습니다.");
    }

    Console.print(input);
  }
}

export default App;
