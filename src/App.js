import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 덧셈할 문자열 전체를 우선 입력받기
    const printStr = await Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요.\n"
    );

    ////// 입력한 값이 적절한 값인지 확인하기위한 기능 구현

    // , 과 : 구분자 처리
    const arr = printStr.split(/[:,]+/).map((num) => +num.trim());

    // 숫자만을 찾아 합하는 기능 구현

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i]) === false) {
        sum += arr[i];
      }
      Console.print(sum);
    }
  }
}

export default App;
