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
    if (inputString.startsWith("//") && inputString.includes("\\n")) {
      inputString = inputString.split("\\n");
      customSeperator = inputString[0].substring(2);
      inputString = inputString[1];
    }

    //문자열에서 숫자 추출하여 배열로 저장
    const seperatorRegex = new RegExp(`[${customSeperator}:,]`);
    const numbers = inputString.split(seperatorRegex).map(Number);

    //숫자의 합 계산
    numbers.forEach((num) => {
      sum += num;
    });
  }
}

export default App;
