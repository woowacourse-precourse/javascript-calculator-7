import { Console } from "@woowacourse/mission-utils";

class App {
  // 커스텀 구분자 -> idx가 2 : 구분자
  customSeparator(input) {
    const separator = input[2];
    return this.splitInput(input.slice(5), separator);
  }
  // 입력값을 구분자에 따라 분리하는 함수
  splitInput(input, separators) {
    const num = [];
    let tmp = "";

    for (let i = 0; i < input.length; i++) {
      if (separators.includes(input[i])) {
        if (tmp !== "") num.push(tmp); // 빈 값이 아니면 배열에 추가
        tmp = ""; // 초기화
      } else {
        tmp += input[i];
      }
    }
    if (tmp !== "") num.push(tmp); // 마지막 값 추가

    console.log(num);
    return num;
  }

  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (
      input.length >= 5 &&
      input.startsWith("//") &&
      input[3] === "\\" &&
      input[4] === "n"
    ) {
      // 커스텀 구분자 일 경우
      numArray = this.customSeparator(input);
    } else {
      // 기본 구분자일 경우
    }

    //this.splitInput("1,2,3:4", [",", ":"]);
  }
}

export default App;
