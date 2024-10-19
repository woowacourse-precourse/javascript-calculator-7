import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력받기
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 빈 문자열 처리
    if (input === "") {
      return Console.print("결과 : 0");
    }

    // 구분자 처리
    const separators = [",", ":"]; 
    for (const separator of separators) {
      input = input.split(separator).join(","); 
    }

    Console.print(input);
  }
}

export default App;
