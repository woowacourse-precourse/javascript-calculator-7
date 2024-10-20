import { Console } from "@woowacourse/mission-utils";

class App {
  // 커스텀 구분자 -> idx가 2 : 구분자
  customSeparator(input) {
    const separator = input[2];
    return this.splitInput(input.slice(5), separator);
  }

  // 기본 구분자 -> :랑 ,
  basicSeparator(input) {
    const separators = [":", ","];
    return this.splitInput(input, separators);
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

  // 숫자인지 그리고 양수인지판별
  isNumber(numArray) {
    return numArray.every(
      (value) => !isNaN(Number(value)) && Number(value) > 0
    );
  }

  // 배열의 숫자 합 계산
  sum(numArray) {
    return numArray.reduce((acc, value) => acc + Number(value), 0);
  }

  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    let numArray;

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
      numArray = this.basicSeparator(input);
    }
    //this.splitInput("1,2,3:4", [",", ":"]);

    if (this.isNumber(numArray)) {
      const result = this.sum(numArray);
      Console.print(`결과 : ${result}`);
    } else {
      //Console.print("ERRPR");
      throw new Error("[ERROR]");
    }
  }
}

export default App;
