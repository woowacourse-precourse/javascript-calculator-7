import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 덧셈할 문자열 전체를 우선 입력받기
    const printStr = await Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요.\n"
    );

    ////// 입력한 값이 적절한 값인지 확인하기위한 기능 구현

    // 구분자 기준으로 입력받은 문자열 split 하기
    const array = printStr.split(",");
    Console.print(array);
  }
}

export default App;
