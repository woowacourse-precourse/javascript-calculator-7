import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let customSeperator = "";
    let sum = 0;

    //문자열 입력받기
    let inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    //커스텀 구분자 저장
    if (inputString.startsWith("//") && inputString.startsWith("\\n", 3)) {
      customSeperator = inputString[2];
      inputString = inputString.substring(5);
    }

    //문자열에서 숫자 추출하여 배열로 저장
    const seperatorRegex = new RegExp(`[${customSeperator}:,]`);
    const numbers = inputString.split(seperatorRegex).map(Number);

    //숫자와 구분자 외의 문자(- 포함)가 있을 경우 Error 발생 및 메세지 출력
    if (numbers.some((num) => num < 0 || isNaN(num))) {
      throw new Error(`[ERROR]`);
    }

    //숫자의 합 계산
    numbers.forEach((num) => {
      sum += num;
    });

    //결과 출력
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
