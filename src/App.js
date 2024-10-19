import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //사용자가 문자열 입력
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    //문자열에서 정규표현식으로 구분자 찾아 숫자 배열로 파싱
    const parsedInput = input.trim().split(/,|:/g).map(Number);
    //숫자 배열 돌면서 값 더하기
    const result = parsedInput.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // 결과 출력
    Console.print("계산 결과: " + result);
  }
}

export default App;
