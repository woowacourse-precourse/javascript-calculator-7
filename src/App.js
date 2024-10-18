import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

class App {
  constructor() {
    // 입력 값을 저장
    this.answer = "";

    // 구분자를 저장하는 배열
    this.delimiter = [",", ":"];

    // 구분자에 따라 분리된 배열을 저장
    this.splitArray = [];
  }

  async run() {
    await this.input();
  }

  // "덧셈할 문자열을 입력해 주세요."란 문장의 출력과 함께 문자열을 입력 받습니다.
  input() {
    Console.readLine("덧셈할 문자열을 입력해 주세요.\n", (answer) => {
      try {
        this.answer = answer;
        this.isCustom(this.answer);
        this.splitByDelimiter();
      } catch (error) {
        console.log(error);
      }
    });
  }

  // 사용자의 값이 커스텀 구분자인지 확인한다.
  isCustom(answer) {
    // 커스텀 구분자의 접두어를 확인하기 위한 변수
    let customDelimiterPrefix = answer.slice(0, 2);
    // 커스텀 구분자의 접미사를 확인하기 위한 변수
    let customDelimiterSuffix = answer.slice(3, 5);
    //커스텀 구분자를 추출하기 위한 변수
    let customDelimiter = answer.slice(2, 3);

    if (customDelimiterPrefix === "//" && customDelimiterSuffix === "\\n") {
      // 커스텀 구분자를 구분자 배열에 저장한다.
      this.delimiter.push(customDelimiter);

      // 커스텀 구분자를 제거한다.
      this.answer = this.answer.slice(5);
    }
  }

  // 구분자에 따라 배열로 분리한다.
  splitByDelimiter() {
    const REG_EXP = new RegExp(`[${this.delimiter.join("")}]`, "g");
    this.splitArray = this.answer.split(REG_EXP);
    this.answer = this.splitArray.join("");
  }
}

export default App;
