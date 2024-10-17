import { Console } from "@woowacourse/mission-utils";

class App {
  // 클래스 내 변수 선언
  constructor() {
    this.separators = [",", ":"];
  }

  async run() {
    // 입력 받기
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 커스텀 구분자 처리
    if (input.startsWith("//")) {
      this.separators.push(input.charAt(2));
      input = input.split(/\n|\\n/)[1];
    }

    // 빈 문자열 처리
    if (input === "") {
      return Console.print("결과 : 0");
    }

    // 구분자 처리
    for (const separator of this.separators) {
      input = input.split(separator).join(",");
    }

    // 숫자가 아닌 값 처리
    if (input.some((value) => isNaN(+value))) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    }

    // 문자열 계산
    const result = this.numberReducer(input.split(","));

    // 결과 출력
    Console.print(`결과 : ${result}`);
  }

  numberReducer(list) {
    return list.reduce((acc, cur) => +cur + acc, 0);
  }

}

export default App;
